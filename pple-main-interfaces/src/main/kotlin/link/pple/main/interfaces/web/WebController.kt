package link.pple.main.interfaces.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class WebController {

    @RequestMapping(
        value = ["/"]
    )
    fun index(): String {
        return "generated/index.html"
    }
}
