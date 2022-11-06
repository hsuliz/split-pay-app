package com.hsuliz.backend.client

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class ClientServiceTest {

    private lateinit var clientService: ClientService

    @BeforeEach
    fun init() {
        clientService = ClientService()
    }

    @Test
    fun some(): Unit {

        assertThat(clientService.test()).isEqualTo(2)
    }
}