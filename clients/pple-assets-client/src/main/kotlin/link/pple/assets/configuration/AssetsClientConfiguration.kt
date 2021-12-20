package link.pple.assets.configuration

import link.pple.assets.client.AssetsClients
import org.springframework.cloud.openfeign.EnableFeignClients
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import
import org.springframework.context.annotation.PropertySource

@ComponentScan(basePackageClasses = [AssetsClients::class])
@EnableFeignClients(basePackageClasses = [AssetsClients::class])
@PropertySource("classpath:application-assets-client-\${spring.profiles.active}.properties")
@Configuration
internal class AssetsClientConfiguration

@Import(AssetsClientConfiguration::class)
annotation class EnableAssetsClients
