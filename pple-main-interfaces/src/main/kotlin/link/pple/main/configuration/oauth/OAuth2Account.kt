package link.pple.main.configuration.oauth

import link.pple.main.domain.account.Account
import org.springframework.security.oauth2.core.user.OAuth2User
import java.io.Serializable

/**
 * Security Session
 * Security ContextHolder -> Authentication -> UserDetails -> GrantedAuthority
 *                                             : Common Login
 *                                          -> OAuth2User
 *                                             : OAuth2 Login
 * class CommonUserContext: UserDetails, OAuth2User
 */
class OAuth2Account(
    private val oAuth2User: OAuth2User,
    private val account: Account
) : OAuth2User by oAuth2User, Serializable {

    val identifier: String
        get() = "${account.id}"
}
