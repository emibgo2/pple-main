package link.pple.main.configuration.oauth.handler

import link.pple.main.configuration.PpleProperties
import link.pple.main.configuration.security.TokenProvider
import link.pple.main.util.CookieUtils
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler
import org.springframework.stereotype.Component
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


@Component
class OAuth2AuthenticationSuccessHandler(
    private val tokenProvider: TokenProvider,
    private val ppleProperties: PpleProperties
) : SimpleUrlAuthenticationSuccessHandler() {

    override fun onAuthenticationSuccess(
        request: HttpServletRequest,
        response: HttpServletResponse,
        authentication: Authentication
    ) {
        val token: String = tokenProvider.createToken(authentication)

        CookieUtils.addCookie(
            response = response,
            name = ppleProperties.auth.tokenCookieName,
            value = token,
            maxAge = 180
        )

        val redirectTargetUrl = "/"

        if (response.isCommitted) {
            log.debug("Response has already been committed. Unable to redirect to $redirectTargetUrl")
            return
        }
        redirectStrategy.sendRedirect(request, response, redirectTargetUrl)
    }

    companion object {
        private val log: Logger = LoggerFactory.getLogger(OAuth2AuthenticationSuccessHandler::class.java)
    }
}
