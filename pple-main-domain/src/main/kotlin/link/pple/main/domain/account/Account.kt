package link.pple.main.domain.account

import link.pple.assets.client.AccountDto
import java.io.Serializable

interface Account : Serializable {
    val id: Long
    val provider: Provider
    val email: String
    val displayName: String
    val role: String
    val profileImageUrl: String?

    data class Provider(
        val type: AccountProviderType,
        val id: String
    ) : Serializable

    companion object {
        fun from(dto: AccountDto): Account {
            return SimpleAccount(
                id = dto.id,
                provider = Provider(
                    type = AccountProviderType.from(dto.key.type),
                    id = dto.key.id
                ),
                email = dto.email,
                displayName = dto.displayName,
                role = dto.role,
                profileImageUrl = dto.profileImageUrl
            )
        }
    }
}

data class SimpleAccount(
    override val id: Long,
    override val provider: Account.Provider,
    override val email: String,
    override val displayName: String,
    override val role: String,
    override val profileImageUrl: String?
) : Account
