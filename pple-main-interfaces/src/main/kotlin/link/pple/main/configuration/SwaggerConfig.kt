package link.pple.main.configuration

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpHeaders
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.builders.RequestParameterBuilder
import springfox.documentation.service.ApiInfo
import springfox.documentation.service.RequestParameter
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2


/**
 * @Author Heli
 */
@Configuration
@EnableSwagger2
class SwaggerConfig {

    companion object {
        private const val API_NAME = "피플 Main API"
        private const val API_VERSION = "0.0.1"
        private const val API_DESCRIPTION = "피플 Main API 명세서"
    }

    @Bean
    fun api(): Docket {
        val parameterBuilder = RequestParameterBuilder()
            .name(HttpHeaders.AUTHORIZATION)
            .description("access_token")
            .required(false)
            .`in`("header")
            .build()
        val globalParameters = mutableListOf<RequestParameter>()
        globalParameters.add(parameterBuilder)
        return Docket(DocumentationType.SWAGGER_2)
            .globalRequestParameters(globalParameters)
            .apiInfo(apiInfo())
            .select()
            .apis(RequestHandlerSelectors.basePackage("link.pple.main.interfaces.api"))
            .paths(PathSelectors.any())
            .build()
    }

    fun apiInfo(): ApiInfo {
        return ApiInfoBuilder()
            .title(API_NAME)
            .version(API_VERSION)
            .description(API_DESCRIPTION)
            .build()
    }
}
