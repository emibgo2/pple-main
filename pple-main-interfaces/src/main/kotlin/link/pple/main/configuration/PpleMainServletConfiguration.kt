package link.pple.main.configuration

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ClassPathResource
import org.springframework.web.servlet.function.router

@Configuration
class PpleMainServletConfiguration {

    @Bean
    fun staticResourcesRouter() = router {
//        "/favicon.ico" { fromObject(ClassPathResource("/static/generated/resources/favicon.ico")).build() }
        resources("/static/**", ClassPathResource("/static/generated/static/"))
    }
}
