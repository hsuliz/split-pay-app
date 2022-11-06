package com.hsuliz.backend.client

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import kotlin.test.assertEquals

@ExtendWith(MockitoExtension::class)
internal class ClientServiceTest {

    @Mock
    private lateinit var clientRepository: ClientRepository

    @InjectMocks
    private lateinit var clientService: ClientService


    @Test
    fun `given client then return client`() {
        //given
        val client = Client(1L, "John", "john@gmail.com")

        //when
        clientService.save(client)

        //then
        verify(clientRepository, times(1)).save(any())
    }

}