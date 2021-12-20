package link.pple.main.domain.account

import link.pple.assets.client.AccountDefinitionDto
import link.pple.assets.client.AccountDto
import link.pple.assets.client.AssetsAccountClient
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class AccountService(
    private val accountClient: AssetsAccountClient
) {

    fun getAccount(accountId: Long): Account {
        val accountDto = accountClient.getAccount(accountId)
        return Account.from(accountDto)
    }

    fun getAccountOrNull(email: String): Account? {
//        val accountDto = accountClient.getAccount(email)
        val accountDto = AccountDto(
            id = 5,
            createdAt = LocalDateTime.now(),
            modifiedAt = LocalDateTime.now(),
            key = AccountDto.ProviderKeyDto("KAKAO", "10"),
            email = "college@kakao.com",
            displayName = "Sun",
            role = "USER",
            profileImageUrl = "abc"
        )
        return Account.from(accountDto)
    }

    fun createAccount(providerAccount: ProviderAccount): Account {
        val accountDto = accountClient.createAccount(providerAccount.toRequestDto())
        return Account.from(accountDto)
    }

    fun getAccountOrCreate(providerAccount: ProviderAccount): Account {
        val account = getAccountOrNull(providerAccount.email)
        if (account != null) {
            return account
        }
        return createAccount(providerAccount)
    }

    private fun ProviderAccount.toRequestDto() = AccountDefinitionDto(
        key = AccountDto.ProviderKeyDto(
            type = providerType.name,
            id = id
        ),
        email = email,
        displayName = displayName,
        profileImageUrl = profileImageUrl
    )
}
