package link.pple.main.configuration.security

import link.pple.main.configuration.TokenAuthenticationFilter
import link.pple.main.configuration.oauth.OAuth2UserService
import link.pple.main.configuration.oauth.handler.OAuth2AuthenticationFailureHandler
import link.pple.main.configuration.oauth.handler.OAuth2AuthenticationSuccessHandler
import link.pple.main.domain.account.AccountService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.oauth2.client.web.OAuth2AuthorizationRequestRedirectFilter


@Configuration
@EnableWebSecurity
/**
 * secured 어노테이션 활성화 / preAuthorize, postAuthorize 어노테이션 활성화
 * 특정 하나의 메소드만 권한을 걸고 싶을 때 사용. secured 권장
 */
//@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
class SecurityConfig(
    private val oAuth2UserService: OAuth2UserService,
    private val tokenProvider: TokenProvider,
    private val accountService: AccountService,
    private val oAuth2AuthenticationSuccessHandler: OAuth2AuthenticationSuccessHandler,
    private val oAuth2AuthenticationFailureHandler: OAuth2AuthenticationFailureHandler
) : WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http.csrf().disable()
            .httpBasic().disable()
            .formLogin().disable()
            .logout().disable()
            .authorizeRequests()
            .antMatchers("/api/**").authenticated()
            .antMatchers("/api/admin/**").hasAuthority("ADMIN")
            .antMatchers("/admin/**").hasAuthority("ADMIN")
            .anyRequest().permitAll()
            .and()
            .oauth2Login().loginPage("/oauth2")
            .userInfoEndpoint().userService(oAuth2UserService)
            .and()
            .successHandler(oAuth2AuthenticationSuccessHandler)
            .failureHandler(oAuth2AuthenticationFailureHandler)
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

        http.addFilterBefore(tokenAuthenticationFilter(), OAuth2AuthorizationRequestRedirectFilter::class.java)
    }

    @Bean
    fun tokenAuthenticationFilter(): TokenAuthenticationFilter {
        return TokenAuthenticationFilter(
            tokenProvider = tokenProvider,
            accountService = accountService
        )
    }
}
