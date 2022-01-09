package link.pple.main.domain.donation

import link.pple.assets.client.DonationDto
import java.time.LocalDateTime

/**
 * @Author Heli
 */

data class DonationDefinition(
    val title: String,
    val content: String,
    val bloodProduct: List<String>,
    val patient: PatientDefinition,
    val phoneNumber: String
)

data class PatientDefinition(
    val blood: Blood
)

class Donation private constructor(
    val uuid: String,
    val createdAt: LocalDateTime,
    val createdBy: Long,
    val modifiedAt: LocalDateTime,
    val modifiedBy: Long,
    val title: String,
    val content: String,
    val bloodProduct: List<String>,
    val patient: Patient,
    val phoneNumber: String,
    val status: String,
    val lastRenewedAt: LocalDateTime?,
    val renewedCount: Long
) {

    data class Patient(
        val blood: Blood
    )

    companion object {

        fun from(dto: DonationDto): Donation {
            return with(dto) {
                Donation(
                    uuid = uuid,
                    createdAt = createdAt,
                    createdBy = createdBy,
                    modifiedAt = modifiedAt,
                    modifiedBy = modifiedBy,
                    title = title,
                    content = content,
                    bloodProduct = bloodProduct,
                    patient = Patient(
                        blood = Blood(
                            rh = Blood.RH.from(patient.blood.rh),
                            abo = Blood.ABO.from(patient.blood.abo),
                        )
                    ),
                    phoneNumber = phoneNumber,
                    status = status,
                    lastRenewedAt = lastRenewedAt,
                    renewedCount = renewedCount
                )
            }
        }
    }
}


// ===============
