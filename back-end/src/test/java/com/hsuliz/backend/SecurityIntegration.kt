package com.hsuliz.backend

import com.hsuliz.backend.repository.ClientRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.test.context.junit.jupiter.SpringExtension


@ExtendWith(SpringExtension::class)
@DataJpaTest
@AutoConfigureTestDatabase(
    replace = AutoConfigureTestDatabase.Replace.NONE
)
open class SecurityIntegration {

    @Autowired
    private lateinit var clientRepository: ClientRepository

    @Test
    fun `test if not null`() {
        assertThat(clientRepository).isNotNull
    }

    fun `if user saved`() {

    }
}