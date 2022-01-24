package link.pple.assets.client

import org.springframework.cloud.openfeign.FeignClient
import org.springframework.http.MediaType
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.*

/**
 * @Author Heli
 */
@Component
@FeignClient(name = "pple-assets-donation-history", url = "\${pple.assets.client.host}")
interface AssetsDonationHistoryClient {

    @GetMapping(
        value = ["/donation/api/v1/donation/history"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getDonationHistories(
        @RequestHeader(name = ACCOUNT_UUID_HEADER) xUuid: String,
        @RequestParam(required = false) donorAccountUuid: String?,
        @RequestParam(required = false) donationUuid: String?,
        @RequestParam(required = false) steps: List<String>?
    ): List<DonationHistoryDto>

    @PostMapping(
        value = ["/donation/api/v1/donation/{donationUuid}/history"],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun createDonationHistory(
        @RequestHeader(name = ACCOUNT_UUID_HEADER) xUuid: String,
        @PathVariable donationUuid: String
    ): DonationHistoryDto
}
