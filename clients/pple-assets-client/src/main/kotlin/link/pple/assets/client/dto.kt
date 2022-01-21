package link.pple.assets.client

import java.time.LocalDate
import java.time.LocalDateTime


internal const val ACCOUNT_UUID_HEADER = "X-ACCOUNT-UUID"

// ======= Request Dto =======

data class AccountPatchDto(
    val displayName: String,
    val profileImageUrl: String?
)

data class AccountApplyDefinitionDto(
    val uuid: String,
    val displayName: String,
    val birthDay: LocalDate,
    val gender: String,
    val phoneNumber: String,
    val blood: BloodDto
)

data class AccountCreateDefinitionDto(
    val key: AccountDto.ProviderKeyDto,
    val email: String,
    val displayName: String,
    val profileImageUrl: String?
)

data class DonationDefinitionDto(
    val title: String,
    val content: String,
    val bloodProduct: List<String>,
    val patient: PatientDefinitionDto,
    val phoneNumber: String
)

data class PatientDefinitionDto(
    val blood: BloodDto
)

data class BloodDto(
    val abo: String,
    val rh: String
)
// ======= Response Dto =======

data class AccountDto(
    val id: Long,
    val uuid: String,
    val createdAt: LocalDateTime,
    val modifiedAt: LocalDateTime,
    val key: ProviderKeyDto,
    val email: String,
    val displayName: String,
    val birthDay: LocalDate?,
    val gender: String?,
    val phoneNumber: String?,
    val profileImageUrl: String?,
    val blood: BloodDto?,
    val role: String,
    val status: String
) {
    data class ProviderKeyDto(
        val type: String,
        val id: String
    )
}

data class DonationDto(
    val id: Long,
    val uuid: String,
    val createdAt: LocalDateTime,
    val createdBy: Long,
    val modifiedAt: LocalDateTime,
    val modifiedBy: Long,
    val title: String,
    val content: String,
    val bloodProduct: List<String>,
    val patient: PatientDto,
    val phoneNumber: String,
    val status: String,
    val lastRenewedAt: LocalDateTime?,
    val renewedCount: Long
)

data class PatientDto(
    val id: Long,
    val uuid: String,
    val createdAt: LocalDateTime,
    val createdBy: Long,
    val modifiedAt: LocalDateTime,
    val modifiedBy: Long,
    val blood: BloodDto,
    val status: String
)
