package link.pple.main.domain.account

interface ProviderAccount {
    val id: String
    val providerType: AccountProviderType
    val email: String
    val displayName: String
    val profileImageUrl: String?
}
