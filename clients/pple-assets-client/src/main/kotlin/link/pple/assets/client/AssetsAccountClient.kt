package link.pple.assets.client

import org.springframework.cloud.openfeign.FeignClient
import org.springframework.http.MediaType
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.*

@Component
@FeignClient(name = "pple-assets-account", url = "\${pple.assets.client.host}")
interface AssetsAccountClient {

    /**
     * Create Account
     */
    @PostMapping(
        value = ["/account/api/v1/accounts"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun createAccount(
        @RequestBody definitionDto: AccountDefinitionDto
    ): AccountDto

    /**
     * Get Account By Id
     */
    @GetMapping(
        value = ["/account/api/v1/accounts/{accountId}"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getAccount(@PathVariable accountId: Long): AccountDto

    /**
     * Get Account By Email
     */
    @GetMapping(
        value = ["/account/api/v1/accounts"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getAccount(@RequestParam email: String): AccountDto
}
