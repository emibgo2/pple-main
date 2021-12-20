package link.pple.main.configuration.oauth.handler

import link.pple.main.configuration.PpleProperties
import link.pple.main.util.CookieUtils
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler
import org.springframework.stereotype.Component
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


@Component
class CustomLogoutSuccessHandler(
    private val ppleProperties: PpleProperties
) : SimpleUrlLogoutSuccessHandler() {

    override fun onLogoutSuccess(
        request: HttpServletRequest,
        response: HttpServletResponse,
        authentication: Authentication?
    ) {
        CookieUtils.deleteCookie(
            request,
            response,
            name = ppleProperties.auth.tokenCookieName
        )
        redirectStrategy.sendRedirect(request, response, "/")
    }
}
