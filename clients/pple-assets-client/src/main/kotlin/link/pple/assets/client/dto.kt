package link.pple.assets.client

import java.time.LocalDateTime

// ======= Request Dto =======

data class AccountDefinitionDto(
    val key: AccountDto.ProviderKeyDto,
    val email: String,
    val displayName: String?,
    val profileImageUrl: String?,
)

// ======= Response Dto =======

data class AccountDto(
    val id: Long,
    val createdAt: LocalDateTime,
    val modifiedAt: LocalDateTime,
    val key: ProviderKeyDto,
    val email: String,
    val displayName: String,
    val role: String,
    val profileImageUrl: String?
) {
    data class ProviderKeyDto(
        val type: String,
        val id: String
    )
}
