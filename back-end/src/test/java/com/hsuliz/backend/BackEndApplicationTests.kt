package com.hsuliz.backend

import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.web.client.RestTemplate

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
internal class BackEndApplicationTests {

    @LocalServerPort
    private var port: Int? = null

    private var baseUrl: String = "http://localhost"


    companion object {

        private lateinit var restTemplate: RestTemplate

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
    fun `dude`() {
        print(baseUrl)
    }

}