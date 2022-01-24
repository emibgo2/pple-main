package link.pple.main.interfaces.api.donation

import link.pple.assets.client.AssetsDonationHistoryClient
import link.pple.main.infrastructure.context.AccountHolder
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

/**
 * @Author Heli
 */
@RestController
class DonationHistoryRestController(
    private val donationHistoryClient: AssetsDonationHistoryClient
) {

    @PostMapping(
        value = ["/api/v1/donation/{donationUuid}/history"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun createDonationHistory(
        @PathVariable donationUuid: String
    ): DonationHistoryDto {

        val account = AccountHolder.get()

        val donationHistory = donationHistoryClient.createDonationHistory(
            xUuid = account.uuid,
            donationUuid = donationUuid
        )

        return donationHistory.toDto()
    }

    @GetMapping(
        value = ["/donation/api/v1/donation/history"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getDonationHistories(): List<DonationHistoryDto> {

        val account = AccountHolder.get()
        val donationHistories = donationHistoryClient.getDonationHistories(
            xUuid = account.uuid,
            donorAccountUuid = account.uuid,
            donationUuid = null,
            steps = null
        )

        return donationHistories.map { it.toDto() }
    }

    @GetMapping(
        value = ["/donation/api/v1/donation/{donationUuid}/history"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getDonationHistoriesByDonation(
        @PathVariable donationUuid: String
    ): List<DonationHistoryDto> {

        val account = AccountHolder.get()
        val donationHistories = donationHistoryClient.getDonationHistories(
            xUuid = account.uuid,
            donorAccountUuid = null,
            donationUuid = donationUuid,
            steps = null
        )

        return donationHistories.map { it.toDto() }
    }
}
