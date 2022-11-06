package com.hsuliz.backend.client

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.*
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
internal class ClientServiceTest {

    @Mock
    private lateinit var clientRepository: ClientRepository

    @InjectMocks
    private lateinit var clientService: ClientService


    @Test
    fun `saveClient should invoke 1 time`() {
        //given, when
        clientService.saveClient(any())

        //then
        verify(clientRepository, times(1)).save(any())
    }

    @Test
    fun `getClients should invoke 1 time`() {
        //given, when
        clientService.clients

        //then
        verify(clientRepository, times(1)).findAll()
    }

}