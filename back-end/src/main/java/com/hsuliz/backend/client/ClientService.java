package com.hsuliz.backend.client;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    public void save(Client client) {
        clientRepository.save(client);
    }

}
