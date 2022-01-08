package link.pple.main.configuration

import link.pple.main.configuration.security.TokenProvider
import link.pple.main.domain.account.AccountService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.web.filter.OncePerRequestFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


class TokenAuthenticationFilter(
    private val tokenProvider: TokenProvider,
    private val accountService: AccountService
) : OncePerRequestFilter() {

    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        try {
            val jwt = getJwtFromRequest(request)
                ?: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4Y2UxOTQ1Ny04OTg3LTQ1OTctYjgwMS1jY2ZkMWE4OGEyNWEiLCJpYXQiOjE2NDE2MTg4MzEsImV4cCI6MTY0MjQ4MjgzMX0.99edn1wJ0lSeA2teVUV_PKjpSLedhccZQpj4G2ScRfqRYyvGv5BuDxLir92ryTWBqay_ZhQk93hIhasYN0-bZw"
            if (jwt != null && tokenProvider.validateToken(jwt)) {
                val identifier = tokenProvider.getIdentifierFromToken(jwt)
                val account = accountService.getAccount(identifier)

                val authorities = mutableListOf(
                    GrantedAuthority { account.role }
                )
                val authentication = UsernamePasswordAuthenticationToken(account, null, authorities)
                authentication.details = WebAuthenticationDetailsSource().buildDetails(request)
                SecurityContextHolder.getContext().authentication = authentication
            }
        } catch (e: Exception) {
            log.error("Could not set user authentication in security context", e)
        }
        filterChain.doFilter(request, response)
    }

    private fun getJwtFromRequest(request: HttpServletRequest): String? {
        val bearerToken: String? = request.getHeader("Authorization")
        return if (bearerToken != null && bearerToken.isNotBlank() && bearerToken.startsWith("Bearer ")) {
            bearerToken.substring(7, bearerToken.length)
        } else null
    }

    companion object {
        private val log: Logger = LoggerFactory.getLogger(TokenAuthenticationFilter::class.java)
    }
}
