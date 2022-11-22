package com.hsuliz.backend

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.hsuliz.backend.model.LoginRequest
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.web.client.RestTemplate
import java.util.*


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation::class)
internal class BackEndApplicationTests {

    @LocalServerPort
    private var port: Int = 0

    @Autowired
    private lateinit var h2Repository: TestH2Repository

    private var baseUrl: String = "http://localhost"


    companion object {

        private val client = LoginRequest("sasha", "password")

        private lateinit var restTemplate: RestTemplate

        private lateinit var accessToken: String

        @JvmStatic
        @BeforeAll
        fun beforeAll(): Unit {
            restTemplate = RestTemplate()
        }

    }

    //http://localhost:8080/api/auth/register
    @BeforeEach
    fun beforeEach() {
        baseUrl = "$baseUrl:$port/api"
    }


    @Test
    @Order(1)
    fun `given client should register`() {
        // given, when
        val responseFromRegister = restTemplate.postForEntity(
            "$baseUrl/auth/register", client, String::class.java
        )

        // then
        assertAll(
            { assertThat(responseFromRegister.statusCode.is2xxSuccessful).isTrue },
            { assertThat(h2Repository.findAll().size).isEqualTo(1) }
        )
    }

    @Test
    @Order(2)
    fun `given client should login`() {
        // given, when
        val responseFromLogin = restTemplate.postForEntity(
            "$baseUrl/auth/login", client, String::class.java
        )

        // then
        assertThat(responseFromLogin.statusCode.is2xxSuccessful).isTrue
        accessToken = responseFromLogin.body as String
    }

    @Test
    @Order(3)
    fun `given client should get details`() {
        // given
        val mapper = jacksonObjectMapper()
        val headers = HttpHeaders()
        headers.set("Authorization", "Bearer $accessToken")
        val entity = HttpEntity("body", headers)

        // when
        val responseFromInfo = restTemplate.exchange(
            "$baseUrl/clients", HttpMethod.GET, entity, String::class.java
        )

        // then
        val x = responseFromInfo.body?.let { mapper.readValue<LoginRequest>(it) }
    }

}