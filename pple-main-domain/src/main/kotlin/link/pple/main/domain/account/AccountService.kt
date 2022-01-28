package link.pple.main.domain.account

import link.pple.assets.client.AccountCreateDefinitionDto
import link.pple.assets.client.AccountDto
import link.pple.assets.client.AssetsAccountClient
import org.springframework.stereotype.Service

@Service
class AccountService(
    private val accountClient: AssetsAccountClient
) {

    fun getAccount(accountUuid: String): Account {
        val accountDto = accountClient.getAccount(
            accountUuid = accountUuid
        )
        return Account.from(accountDto)
    }

    fun getAccount(accountId: Long): Account {
        val accountDto = accountClient.getAccountById(
            accountId = accountId
        )
        return Account.from(accountDto)
    }

    fun getAccountOrNull(
        email: String
    ): Account? {
        val accountDto = accountClient.getAccountByEmail(
            email = email
        )
        return accountDto?.let {
            Account.from(it)
        }
    }

    fun createAccount(providerAccount: ProviderAccount): Account {
        val accountDto = accountClient.createAccount(providerAccount.toRequestDto())
        return Account.from(accountDto)
    }

    fun getAccountOrCreate(providerAccount: ProviderAccount): Account {
        val account = getAccountOrNull(
            email = providerAccount.email
        )
        if (account != null) {
            return account
        }
        return createAccount(providerAccount)
    }

    fun applyAccount(uuid: String, definition: AccountApplyDefinition): Account {

        val account = accountClient.applyAccount(
            xUuid = uuid,
            dto = definition.toDto()
        )

        return Account.from(account)
    }

    fun updateAccount(xUuid: String, definition: AccountPatchDefinition): Account {

        val account = accountClient.updateAccount(
            xUuid = xUuid,
            accountUuid = definition.accountUuid,
            definitionDto = definition.toDto()
        )

        return Account.from(account)
    }

    fun ProviderAccount.toRequestDto() = AccountCreateDefinitionDto(
        key = AccountDto.ProviderKeyDto(
            type = providerType.name,
            id = id
        ),
        email = email,
        displayName = displayName,
        profileImageUrl = profileImageUrl
    )
}
