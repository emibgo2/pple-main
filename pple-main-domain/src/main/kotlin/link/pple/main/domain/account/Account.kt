package link.pple.main.domain.account

import link.pple.assets.client.AccountApplyDefinitionDto
import link.pple.assets.client.AccountDto
import link.pple.assets.client.AccountPatchDto
import link.pple.assets.client.BloodDto
import link.pple.main.domain.donation.Blood
import java.io.Serializable
import java.time.LocalDate

interface Account : Serializable {
    val id: Long
    val uuid: String
    val key: Provider
    val email: String
    val displayName: String

    val role: String

    val status: String

    val birthDay: LocalDate?
    val gender: String?
    val phoneNumber: String?
    val profileImageUrl: String?
    val blood: Blood?

    data class Provider(
        val type: AccountProviderType,
        val id: String
    ) : Serializable

    companion object {
        fun from(dto: AccountDto): Account {
            return SimpleAccount(
                id = dto.id,
                uuid = dto.uuid,
                key = Provider(
                    type = AccountProviderType.from(dto.key.type),
                    id = dto.key.id
                ),
                email = dto.email,
                displayName = dto.displayName,
                role = dto.role,
                profileImageUrl = dto.profileImageUrl,
                status = dto.status,
                birthDay = dto.birthDay,
                gender = dto.gender,
                phoneNumber = dto.phoneNumber,
                blood = dto.blood?.let {
                    Blood(
                        rh = Blood.RH.from(it.rh),
                        abo = Blood.ABO.from(it.abo)
                    )
                }
            )
        }
    }
}

data class SimpleAccount(
    override val id: Long,
    override val uuid: String,
    override val key: Account.Provider,
    override val email: String,
    override val displayName: String,
    override val role: String,
    override val profileImageUrl: String?,
    override val status: String,
    override val birthDay: LocalDate?,
    override val gender: String?,
    override val phoneNumber: String?,
    override val blood: Blood?
) : Account


// ===============

data class AccountApplyDefinition(
    val uuid: String,
    val displayName: String,
    val birthDay: LocalDate,
    val gender: String,
    val phoneNumber: String,
    val blood: Blood
)

data class AccountPatchDefinition(
    val accountUuid: String,
    val displayName: String
)

// ================

internal fun AccountApplyDefinition.toDto() = AccountApplyDefinitionDto(
    uuid = uuid,
    displayName = displayName,
    birthDay = birthDay,
    gender = gender,
    phoneNumber = phoneNumber,
    blood = BloodDto(
        rh = blood.rh.name,
        abo = blood.abo.name
    )
)

internal fun AccountPatchDefinition.toDto() = AccountPatchDto(
    displayName = displayName,
    profileImageUrl = null
)
