package link.pple.main.domain.donation

import link.pple.assets.client.AssetsDonationClient
import link.pple.assets.client.BloodDto
import link.pple.assets.client.DonationDefinitionDto
import link.pple.assets.client.PatientDefinitionDto
import org.springframework.stereotype.Service

/**
 * @Author Heli
 */
@Service
class DonationService(
    private val donationClient: AssetsDonationClient
) {

    fun create(
        xUuid: String,
        definition: DonationDefinition
    ): Donation {

        val definitionDto = DonationDefinitionDto(
            title = definition.title,
            content = definition.content,
            bloodProduct = definition.bloodProduct,
            patient = PatientDefinitionDto(
                blood = BloodDto(
                    abo = definition.patient.blood.abo.name,
                    rh = definition.patient.blood.rh.name
                )
            ),
            phoneNumber = definition.phoneNumber
        )

        val donationDto = donationClient.createDonation(
            xUuid = xUuid,
            dto = definitionDto
        )

        return Donation.from(donationDto)
    }
}
