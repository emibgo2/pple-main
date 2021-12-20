package link.pple.main.domain.account

import link.pple.main.util.notNull

enum class AccountProviderType {
    KAKAO;

    companion object {
        private val types = values().associateBy { it.name.lowercase() }

        fun from(type: String): AccountProviderType =
            types[type.lowercase()].notNull { "AccountProviderType can not parse [$type]" }
    }
}
