package link.pple.main.domain.donation

import link.pple.main.util.notNull

/**
 * @Author Heli
 */
data class Blood(
    val rh: RH,
    val abo: ABO
) {

    enum class RH {
        POSITIVE, NEGATIVE;

        companion object {
            private val items = values().associateBy { it.name.lowercase() }

            fun from(rh: String): RH {
                return items[rh.lowercase()].notNull { "Blood.RH can not bed parsed [$rh]" }
            }
        }
    }

    enum class ABO {
        A, B, O, AB;

        companion object {
            private val items = values().associateBy { it.name.lowercase() }

            fun from(abo: String): ABO {
                return items[abo.lowercase()].notNull { "Blood.ABO can not bed parsed [$abo]" }
            }
        }
    }
}
