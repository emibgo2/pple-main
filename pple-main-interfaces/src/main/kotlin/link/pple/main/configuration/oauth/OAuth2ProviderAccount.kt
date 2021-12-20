package link.pple.main.configuration.oauth

import link.pple.main.domain.account.AccountProviderType
import link.pple.main.domain.account.ProviderAccount
import link.pple.main.util.notNull
import org.springframework.security.oauth2.core.user.OAuth2User

sealed class OAuth2ProviderAccount : ProviderAccount {

    companion object {
        fun of(providerType: AccountProviderType, oAuth2User: OAuth2User): OAuth2ProviderAccount {
            return when (providerType) {
                AccountProviderType.KAKAO -> KakaoProviderAccount(oAuth2User)
            }
        }
    }
}

data class KakaoProviderAccount(
    val oAuth2User: OAuth2User
) : OAuth2ProviderAccount() {

    override val providerType: AccountProviderType = AccountProviderType.KAKAO

    @Suppress("UNCHECKED_CAST")
    private val kakaoAccount: Map<String, Any> = oAuth2User.attributes["kakao_account"].notNull {
        "OAuth2Profile.Kakao kakao_account can not be parsed [${oAuth2User.attributes}]"
    } as Map<String, Any>

    @Suppress("UNCHECKED_CAST")
    private val profile: Map<String, Any> = kakaoAccount["profile"].notNull {
        "OAuth2Profile.Kakao kakao_account.profile can not be parsed [${oAuth2User.attributes}]"
    } as Map<String, Any>

    override val id: String
        get() = oAuth2User.attributes["id"]
            .notNull { "OAuth2Profile.Kakao id can not be parsed [${oAuth2User.attributes}]" }
            .toString()

    override val email: String
        get() = kakaoAccount["email"]
            .notNull { "OAuth2Profile.Kakao kakaoAccount.email can not be parsed [${oAuth2User.attributes}]" }
            .toString()

    override val displayName: String
        get() = profile["nickname"]
            .notNull { "OAuth2Profile.Kakao profile.nickname can not be parsed [${oAuth2User.attributes}]" }
            .toString()

    override val profileImageUrl: String?
        get() = profile["profile_image_url"] as String?
}
