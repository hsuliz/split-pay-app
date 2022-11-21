package com.hsuliz.backend

import com.hsuliz.backend.entity.Client
import com.hsuliz.backend.repository.ClientRepository
import com.hsuliz.backend.service.ClientService
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringExtension


@ExtendWith(SpringExtension::class)
@SpringBootTest
@AutoConfigureTestDatabase(
    replace = AutoConfigureTestDatabase.Replace.NONE
)
open class SecurityIntegration {

    @Autowired
    private lateinit var clientRepository: ClientRepository

    @Autowired
    private lateinit var clientService: ClientService


    @Test
    fun `test if not null`() {
        assertThat(clientRepository).isNotNull
        assertThat(clientService).isNotNull
    }

    @Test
    fun `if user saved`() {
        // given
        val client = Client(
            "test@mail.com", "password"
        )

        // when
        clientService.saveClient(client)

        // then
        assertThat(clientRepository.findByEmail("test@mail.com")).isNotNull
    }
}