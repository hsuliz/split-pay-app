package com.hsuliz.backend.service;

import com.hsuliz.backend.repository.ClientRepository;
import com.hsuliz.backend.model.Client;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;


    public Client getClient(long id) {
        return clientRepository
                .findById(id)
                .orElseThrow(RuntimeException::new);
    }

    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    public void saveClient(Client client) {
        clientRepository.save(client);
    }

    public void deleteClient(long id) {
        clientRepository.deleteById(id);
    }

}
