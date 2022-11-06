package com.hsuliz.backend.client;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    public void saveClient(Client client) {
        clientRepository.save(client);
    }

}
