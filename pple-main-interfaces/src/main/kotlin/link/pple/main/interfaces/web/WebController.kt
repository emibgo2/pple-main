package link.pple.main.interfaces.web

import org.springframework.boot.web.servlet.error.ErrorController
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class WebController : ErrorController {

    @RequestMapping(
        value = ["/", "/error"]
    )
    fun index(): String {
        return "generated/index.html"
    }
}
