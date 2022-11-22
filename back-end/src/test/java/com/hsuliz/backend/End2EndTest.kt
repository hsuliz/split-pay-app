package com.hsuliz.backend

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.hsuliz.backend.entity.Client
import com.hsuliz.backend.model.LoginRequest
import com.hsuliz.backend.repository.TestH2Repository
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
internal class End2EndTest {

    @LocalServerPort
    private var port: Int = 0

    @Autowired
    private lateinit var h2Repository: TestH2Repository

    private var baseUrl: String = "http://localhost"

    private val mapper = jacksonObjectMapper()
        .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)

    companion object {

        private val givenLogin = LoginRequest("sasha", "password")

        private lateinit var restTemplate: RestTemplate

        private lateinit var accessToken: String


        @JvmStatic
        @BeforeAll
        fun beforeAll() {
            restTemplate = RestTemplate()
        }

    }


    @BeforeEach
    fun beforeEach() {
        baseUrl = "$baseUrl:$port/api"
    }


    @Test
    @Order(1)
    fun `given client should register`() {
        // given, when
        val responseFromRegister = restTemplate.postForEntity(
            "$baseUrl/auth/register", givenLogin, String::class.java
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
            "$baseUrl/auth/login", givenLogin, String::class.java
        )

        // then
        assertThat(responseFromLogin.statusCode.is2xxSuccessful).isTrue
        accessToken = responseFromLogin.body as String
    }

    @Test
    @Order(3)
    fun `given client should get details`() {
        // given
        val headers = HttpHeaders()
        headers.set("Authorization", "Bearer $accessToken")

        // when
        val responseFromInfo = restTemplate.exchange(
            "$baseUrl/clients", HttpMethod.GET, HttpEntity("body", headers), String::class.java
        )

        // then
        val client = mapper.readValue(responseFromInfo.body, Client::class.java)

        assertAll(
            { assertThat(client).isNotNull },
            { assertThat(client.username).isEqualTo(givenLogin.username) },
            { assertThat(client.password).isNull() }
        )
    }

}