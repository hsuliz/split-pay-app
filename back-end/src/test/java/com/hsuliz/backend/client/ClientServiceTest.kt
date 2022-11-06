package com.hsuliz.backend.client

import org.mockito.InjectMocks
import org.mockito.Mock

internal class ClientServiceTest {

    @Mock
    private lateinit var clientRepository: ClientRepository

    @InjectMocks
    private lateinit var clientService: ClientService


}