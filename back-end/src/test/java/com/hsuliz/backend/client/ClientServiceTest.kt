package com.hsuliz.backend.client

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

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

    @Test
    fun `getClients shouldn't throw`() {
        //given
        var client = Client(1L, "John", "john@gmail.com")

        //when
        `when`(clientRepository.findById(1)).thenReturn(Optional.of(client))
        var actual = clientService.getClient(1L)

        // then
        assertThat(actual).isEqualTo(client)
    }

    // #TODO
    @Test
    fun `getClients should throw`() {
        //given, when
        `when`(clientRepository.findById(1)).thenReturn(null)
        var actual = clientService.getClient(1L)

    }

}