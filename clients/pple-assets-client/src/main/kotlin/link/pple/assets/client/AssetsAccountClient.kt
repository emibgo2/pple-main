package link.pple.assets.client

import org.springframework.cloud.openfeign.FeignClient
import org.springframework.http.MediaType
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.*

@Component
@FeignClient(name = "pple-assets-account", url = "\${pple.assets.client.host}")
interface AssetsAccountClient {

    /**
     * UUID 로 회원 정보 조회
     * @Author Heli
     */
    @GetMapping(
        value = ["/account/api/v1/account/{accountUuid}"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getAccount(
        @PathVariable accountUuid: String
    ): AccountDto

    /**
     * Email 로 회원 정보 조회
     * @Author Heli
     */
    @GetMapping(
        value = ["/account/api/v1/account"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getAccountByEmail(
//        @RequestHeader(name = ACCOUNT_UUID_HEADER) accountUuid: String,
        @RequestParam email: String
    ): AccountDto?

    /**
     * 회원 가입: OAuth2 최초 인증, 계정에 추가 정보 없음
     * @Author Heli
     */
    @PostMapping(
        value = ["/account/api/v1/account"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun createAccount(
        @RequestBody definitionDto: AccountCreateDefinitionDto
    ): AccountDto

    /**
     * 회원 가입: OAuth2 가입 후 추가 정보 입력
     * @Author Heli
     */
    @PatchMapping(
        value = ["/account/api/v1/account"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun applyAccount(
        @RequestHeader(name = ACCOUNT_UUID_HEADER) xUuid: String,
        @RequestBody dto: AccountApplyDefinitionDto
    ): AccountDto

    /**
     * 회원 정보 수정(DisplayName, ProfileImageUrl)
     * @Author Heli
     */
    @PatchMapping(
        value = ["/account/api/v1/account/{accountUuid}"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun updateAccount(
        @RequestHeader(name = ACCOUNT_UUID_HEADER) xUuid: String,
        @PathVariable accountUuid: String,
        @RequestBody definitionDto: AccountPatchDto
    ): AccountDto

    /**
     * @param id 로 회원 정보 조회
     * @Author Heli
     */
    @GetMapping(
        value = ["/account/api/v1/account"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getAccountById(
        @RequestParam accountId: Long
    ): AccountDto
}
