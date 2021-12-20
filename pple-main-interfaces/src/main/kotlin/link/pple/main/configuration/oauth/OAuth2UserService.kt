package link.pple.main.configuration.oauth

import link.pple.main.domain.account.AccountProviderType
import link.pple.main.domain.account.AccountService
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest
import org.springframework.stereotype.Service

/**
 * OAuth2 Sign-up Process
 *    1. OAuth2 Login 완료 후 후처리: 코드 수신(인증)
 *    2. 액세스 토큰 발행(권한)
 *    3. 사용자 프로필 정보 조회
 *    4. 회원가입
 *      - (Optional) 회원가입 시 필요하다면 추가 정보 입력 받기
 */
@Service
class OAuth2UserService(
    private val accountService: AccountService
) : DefaultOAuth2UserService() {

    /**
     * 1. Google Login Button Click
     * 2. Google Login Pop-up
     * 3. Login Success
     * 4. return Code
     * 5. request AccessToken
     * 4, 5번을 OAuth2-Client 에서 해줌
     */
    override fun loadUser(userRequest: OAuth2UserRequest): OAuth2Account {

        val clientName: String = userRequest.clientRegistration.clientName
        val oAuth2User = super.loadUser(userRequest)

        val providerAccount = OAuth2ProviderAccount.of(
            providerType = AccountProviderType.from(clientName),
            oAuth2User = oAuth2User
        )

        val account = accountService.getAccountOrCreate(
            providerAccount = providerAccount
        )

        return OAuth2Account(
            oAuth2User = oAuth2User,
            account = account
        )
    }
}
