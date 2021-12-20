package link.pple.main

import link.pple.main.configuration.PpleProperties
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.time.ZoneOffset
import java.util.*
import javax.annotation.PostConstruct

@SpringBootApplication
@EnableConfigurationProperties(PpleProperties::class)
class PpleMainApplication {

    @PostConstruct
    fun initialize() {
        TimeZone.setDefault(TimeZone.getTimeZone(ZoneOffset.UTC))
    }
}

fun main(args: Array<String>) {
    runApplication<PpleMainApplication>(*args)
}

@RestController
class HelloRestController {

    @GetMapping(
        value = ["/hello"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun hello() = "Hello, pple-main"

    @GetMapping(
        value = ["/admin"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun admin() = "admin"

    @GetMapping(
        value = ["/manager"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun manager() = "manager"

    @GetMapping(
        value = ["/any"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun any() = "any"
}
