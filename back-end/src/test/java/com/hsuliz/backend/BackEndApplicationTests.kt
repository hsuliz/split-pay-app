package com.hsuliz.backend

import com.hsuliz.backend.model.LoginRequest
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.web.client.RestTemplate

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
internal class BackEndApplicationTests {

    @LocalServerPort
    private var port: Int? = null

    private var baseUrl: String = "http://localhost"

    @Autowired
    private lateinit var h2Repository: TestH2Repository


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
        baseUrl = "$baseUrl:$port/api/auth"
    }


    @Test
    fun test() {
        val client = LoginRequest("sasha", "password")
        val x = restTemplate.postForEntity(
            "$baseUrl/register",
            client,
            String::class.java
        )
        //val x = restTemplate.postForObject("$baseUrl/register", client, String::class.java)
        print(x)
        assertThat(h2Repository.findAll().size).isEqualTo(1)
    }


}