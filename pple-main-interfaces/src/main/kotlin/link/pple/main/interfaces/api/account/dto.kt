package link.pple.main.interfaces.api.account

import link.pple.main.domain.account.Account
import link.pple.main.domain.account.AccountApplyDefinition
import link.pple.main.domain.donation.Blood
import java.time.LocalDate

/**
 * @Author Heli
 */

data class AccountApplyDto(
    val uuid: String,
    val displayName: String,
    val birthDay: LocalDate,
    val gender: String,
    val blood: Blood,
    val phoneNumber: String
)

data class AccountPatchDto(
    val displayName: String
)

data class AccountDto(
    val uuid: String,
    val key: Account.Provider,
    val email: String,
    val displayName: String,

    val role: String,

    val status: String,

    val birthDay: LocalDate?,
    val gender: String?,
    val phoneNumber: String?,
    val profileImageUrl: String?,
    val blood: Blood?
)

data class DonationCreateAccountDto(
    val uuid: String,
    val displayName: String,
    val profileImageUrl: String?,
    val blood: Blood?
)

// ===============

internal fun Account.toDto() = AccountDto(
    uuid = uuid,
    key = key,
    email = email,
    displayName = displayName,
    role = role,
    status = status,
    birthDay = birthDay,
    gender = gender,
    phoneNumber = phoneNumber,
    profileImageUrl = profileImageUrl,
    blood = blood
)

internal fun Account.toDonationAccountDto() = DonationCreateAccountDto(
    uuid = uuid,
    displayName = displayName,
    profileImageUrl = profileImageUrl,
    blood = blood
)

internal fun AccountApplyDto.toDefinition() = AccountApplyDefinition(
    uuid = uuid,
    displayName = displayName,
    birthDay = birthDay,
    gender = gender,
    phoneNumber = phoneNumber,
    blood = blood
)
