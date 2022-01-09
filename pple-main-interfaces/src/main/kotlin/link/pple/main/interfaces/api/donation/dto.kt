package link.pple.main.interfaces.api.donation

import link.pple.main.domain.donation.Blood
import link.pple.main.domain.donation.Donation
import link.pple.main.domain.donation.DonationDefinition
import link.pple.main.domain.donation.PatientDefinition
import java.time.LocalDateTime


/**
 * @Author Heli
 */

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

data class DonationDto(
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
    val blood: BloodDto
)


// ===============

internal fun DonationDefinitionDto.toDefinition() = DonationDefinition(
    title = title,
    content = content,
    bloodProduct = bloodProduct,
    patient = PatientDefinition(
        blood = Blood(
            rh = Blood.RH.from(patient.blood.rh),
            abo = Blood.ABO.from(patient.blood.abo)
        )
    ),
    phoneNumber = phoneNumber
)

internal fun Donation.toDto() = DonationDto(
    uuid = uuid,
    createdAt = createdAt,
    createdBy = createdBy,
    modifiedAt = modifiedAt,
    modifiedBy = modifiedBy,
    title = title,
    content = content,
    bloodProduct = bloodProduct,
    patient = PatientDto(
        blood = BloodDto(
            abo = patient.blood.abo.name,
            rh = patient.blood.rh.name
        )
    ),
    phoneNumber = phoneNumber,
    lastRenewedAt = lastRenewedAt,
    renewedCount = renewedCount,
    status = status
)
