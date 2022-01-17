import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

plugins {
    id("com.google.cloud.tools.jib")
}

dependencies {
    implementation(project(":pple-main-domain"))
    api("org.springframework.boot:spring-boot-starter-oauth2-client")

    implementation("io.springfox:springfox-boot-starter:3.0.0")

    implementation("io.jsonwebtoken:jjwt:0.9.1")
}

jib {
    from {
        image = "adoptopenjdk/openjdk11:jdk-11.0.10_9-debian"
    }
    to {
        image = "pple-main"
        tags = if ("prod" == System.getenv("ENV")) {
            setOf(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss")))
        } else {
            setOf("latest")
        }
    }
    container {
        ports = listOf("10001")
        creationTime = "USE_CURRENT_TIMESTAMP"
    }
    extraDirectories {
        setPaths("/pple/logs/app")
    }
}


val webAppDir = "${rootDir}/pple-main-web-client"
val webAppGeneratedDir = "src/main/resources/static/generated"

val appYarnInstall = tasks.register<Exec>("appYarnInstall") {
    setWorkingDir(webAppDir)
    setCommandLine("yarn", "install")
}

val appYarnBuild = tasks.register<Exec>("appYarnBuild") {
    setWorkingDir(webAppDir)
    if ("prod" == System.getenv("ENV")) {
        setCommandLine("yarn", "run", "build:prod")
    } else {
        setCommandLine("yarn", "run", "build")
    }

    if ("true" != System.getenv("PASS_YARN")) {
        dependsOn(appYarnInstall)
    }
}

val copyWebApp = tasks.register<Copy>("copyWebApp") {

    from("$webAppDir/build")

    // jib 는 jar 로 배포하는게 아니라 class 를 그대로 실행시키기 때문에 build 패키지가 아니라 src 패키지에다 리소스 넣어줘야됨
    into(webAppGeneratedDir)

    if ("true" != System.getenv("PASS_YARN")) {
        dependsOn(appYarnBuild)
    }
}

val cleanWebApp = tasks.register<Delete>("cleanWebApp") {
    delete(webAppGeneratedDir)
}

tasks.withType<JavaCompile> {
    dependsOn(copyWebApp)
}

tasks.named("clean") {
    if ("true" != System.getenv("PASS_YARN")) {
        dependsOn(cleanWebApp)
    }
}

val jar: Jar by tasks
jar.enabled = false

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootJar> {
    enabled = true
    archiveFileName.set("app.jar")
}
