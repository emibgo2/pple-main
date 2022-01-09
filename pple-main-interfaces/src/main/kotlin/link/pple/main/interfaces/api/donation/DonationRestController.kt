package link.pple.main.interfaces.api.donation

import link.pple.main.domain.donation.DonationService
import link.pple.main.infrastructure.context.AccountHolder
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

/**
 * @Author Heli
 */
@RestController
class DonationRestController(
    private val donationService: DonationService
) {

    @PostMapping(
        value = ["/api/v1/donation"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun createDonation(
        @RequestBody dto: DonationDefinitionDto
    ): DonationDto {

        val account = AccountHolder.get()
        val definition = dto.toDefinition()

        val donation = donationService.create(
            xUuid = account.uuid,
            definition = definition
        )

        return donation.toDto()
    }
}
