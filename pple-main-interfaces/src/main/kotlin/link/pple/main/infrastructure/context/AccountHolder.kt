package link.pple.main.infrastructure.context

import link.pple.main.domain.account.Account
import org.springframework.security.core.context.SecurityContextHolder

/**
 * @Author Heli
 */
object AccountHolder {

    fun get(): Account {
        return SecurityContextHolder.getContext().authentication.principal as Account
    }
}
