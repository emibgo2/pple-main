package link.pple.main.interfaces.api.account

import link.pple.main.domain.account.AccountPatchDefinition
import link.pple.main.domain.account.AccountService
import link.pple.main.infrastructure.context.AccountHolder
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

/**
 * @Author Heli
 */
@RestController
class AccountRestController(
    private val accountService: AccountService
) {

    @GetMapping(
        value = ["/api/v1/account/profile"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getProfile(): AccountDto {
        val account = AccountHolder.get()

        val existAccount = accountService.getAccount(
            accountUuid = account.uuid
        )

        return existAccount.toDto()
    }

    @PatchMapping(
        value = ["/api/v1/account"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun applyAccount(
        @RequestBody dto: AccountApplyDto
    ): AccountDto {

        val account = AccountHolder.get()

        val applyAccount = accountService.applyAccount(
            uuid = account.uuid,
            definition = dto.toDefinition()
        )

        return applyAccount.toDto()
    }

    @PatchMapping(
        value = ["/api/v1/account/{accountUuid}"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE],
    )
    fun updateAccount(
        @PathVariable accountUuid: String,
        @RequestBody dto: AccountPatchDto
    ): AccountDto {

        val account = AccountHolder.get()

        val definition = AccountPatchDefinition(
            accountUuid = accountUuid,
            displayName = dto.displayName
        )

        val updatedAccount = accountService.updateAccount(
            xUuid = account.uuid,
            definition = definition
        )

        return updatedAccount.toDto()
    }
}
