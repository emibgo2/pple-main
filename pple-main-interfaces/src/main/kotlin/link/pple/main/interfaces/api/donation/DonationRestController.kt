package link.pple.main.interfaces.api.donation

import link.pple.assets.client.AssetsDonationClient
import link.pple.main.domain.account.AccountService
import link.pple.main.domain.donation.DonationService
import link.pple.main.infrastructure.context.AccountHolder
import link.pple.main.interfaces.api.PagedDto
import link.pple.main.interfaces.api.account.toDonationAccountDto
import link.pple.main.interfaces.api.toPagedDto
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

/**
 * @Author Heli
 */
@RestController
class DonationRestController(
    private val donationService: DonationService,
    private val donationClient: AssetsDonationClient,
    private val accountService: AccountService
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

        val createdAccount = accountService.getAccount(
            accountId = donation.createdBy
        )

        return donation.toDto(createdAccount.toDonationAccountDto())
    }

    @GetMapping(
        value = ["/api/v1/donation"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getDonations(
        @RequestParam(required = false, defaultValue = "0") page: Int,
        @RequestParam(required = false, defaultValue = "10") size: Int
    ): PagedDto<DonationDto> {

        val donationPage = donationClient.getDonations(
            status = DONATION_FETCH_STATUS,
            page = page,
            size = size
        )

        return donationPage.toPagedDto {
            val createdAccount = accountService.getAccount(
                accountId = it.createdBy
            )

            it.toDto(createdAccount.toDonationAccountDto())
        }
    }

    @GetMapping(
        value = ["/api/v1/donation/own"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getDonationsByOwn(
        @RequestParam(required = false, defaultValue = "0") page: Int,
        @RequestParam(required = false, defaultValue = "10") size: Int
    ): PagedDto<DonationDto> {

        val account = AccountHolder.get()

        val donationPage = donationClient.getDonationsByOwn(
            xUuid = account.uuid,
            status = DONATION_FETCH_STATUS,
            page = page,
            size = size
        )

        return donationPage.toPagedDto {
            val createdAccount = accountService.getAccount(
                accountId = it.createdBy
            )

            it.toDto(createdAccount.toDonationAccountDto())
        }
    }

    @GetMapping(
        value = ["/donation/api/v1/donation/{donationUuid}"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getDonation(
        @PathVariable donationUuid: String
    ): DonationDto {

        val account = AccountHolder.get()

        val donation = donationClient.getDonation(
            xUuid = account.uuid,
            donationUuid = donationUuid
        )

        val createdAccount = accountService.getAccount(
            accountId = donation.createdBy
        )

        return donation.toDto(createdAccount.toDonationAccountDto())
    }

    companion object {

        private val DONATION_FETCH_STATUS = listOf("ACTIVE")
    }
}
