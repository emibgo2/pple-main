package link.pple.main.configuration

import link.pple.main.util.CookieUtils
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component

@Component
@ConfigurationProperties(prefix = "pple")
class PpleProperties {
    val auth = Auth()
    val oauth2 = OAuth2()

    class Auth {
        var tokenCookieName: String = CookieUtils.DEFAULT_AUTH_TOKEN_COOKIE_NAME
        var tokenSecret: String? = null
        var tokenExpirationMillis: Long = 0
    }

    class OAuth2 {
        var authorizedRedirectUris: List<String> = ArrayList()
            private set

        fun authorizedRedirectUris(authorizedRedirectUris: List<String>): OAuth2 {
            this.authorizedRedirectUris = authorizedRedirectUris
            return this
        }
    }
}
