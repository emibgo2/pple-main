package link.pple.assets.client

import org.springframework.cloud.openfeign.FeignClient
import org.springframework.http.MediaType
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.*

/**
 * @Author Heli
 */
@Component
@FeignClient(name = "pple-assets-donation", url = "\${pple.assets.client.host}")
interface AssetsDonationClient {

    @PostMapping(
        value = ["/donation/api/v1/donation"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun createDonation(
        @RequestHeader(name = ACCOUNT_UUID_HEADER) xUuid: String,
        @RequestBody dto: DonationDefinitionDto
    ): DonationDto

    @GetMapping(
        value = ["/donation/api/v1/donation/{donationUuid}"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getDonation(
        @RequestHeader(name = ACCOUNT_UUID_HEADER) xUuid: String,
        @PathVariable donationUuid: String
    ): DonationDto


    @GetMapping(
        value = ["/donation/api/v1/donation"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getDonations(
        @RequestParam(required = false) status: List<String>?,
        @RequestParam page: Int,
        @RequestParam size: Int
    ): PagedDto<DonationDto>

    @GetMapping(
        value = ["/donation/api/v1/donation/own"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getDonationsByOwn(
        @RequestHeader(name = ACCOUNT_UUID_HEADER) xUuid: String,
        @RequestParam(required = false) status: List<String>?,
        @RequestParam page: Int,
        @RequestParam size: Int
    ): PagedDto<DonationDto>
}
