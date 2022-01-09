package link.pple.assets.client

import org.springframework.cloud.openfeign.FeignClient
import org.springframework.http.MediaType
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestHeader

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
}
