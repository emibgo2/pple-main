package link.pple.main.configuration.security

import io.jsonwebtoken.*
import link.pple.main.configuration.PpleProperties
import link.pple.main.configuration.oauth.OAuth2Account
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Service
import java.security.SignatureException
import java.util.*
import io.jsonwebtoken.UnsupportedJwtException as UnsupportedJwtException1


@Service
class TokenProvider(
    private val ppleProperties: PpleProperties
) {

    fun createToken(authentication: Authentication): String {
        val oAuth2Account: OAuth2Account = authentication.principal as OAuth2Account
        val now = Date()
        val expiryDate = Date(now.time + ppleProperties.auth.tokenExpirationMillis)
        return Jwts.builder()
            .setSubject(oAuth2Account.identifier)
            .setIssuedAt(now)
            .setExpiration(expiryDate)
            .signWith(SignatureAlgorithm.HS512, ppleProperties.auth.tokenSecret)
            .compact()
    }

    fun getIdentifierFromToken(token: String): String {
        val claims: Claims = Jwts.parser()
            .setSigningKey(ppleProperties.auth.tokenSecret)
            .parseClaimsJws(token)
            .body
        return claims.subject
    }

    fun validateToken(authToken: String?): Boolean {
        try {
            Jwts.parser().setSigningKey(ppleProperties.auth.tokenSecret).parseClaimsJws(authToken)
            return true
        } catch (ex: SignatureException) {
            log.error("Invalid JWT signature")
        } catch (ex: MalformedJwtException) {
            log.error("Invalid JWT token")
        } catch (ex: ExpiredJwtException) {
            log.error("Expired JWT token")
        } catch (ex: UnsupportedJwtException1) {
            log.error("Unsupported JWT token")
        } catch (ex: IllegalArgumentException) {
            log.error("JWT claims string is empty.")
        }
        return false
    }

    companion object {
        private val log: Logger = LoggerFactory.getLogger(TokenProvider::class.java)
    }
}
