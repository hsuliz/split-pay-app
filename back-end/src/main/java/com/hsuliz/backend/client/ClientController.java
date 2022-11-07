package com.hsuliz.backend.client;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin
@AllArgsConstructor
public class ClientController {

    private final ClientService clientService;


    @GetMapping("/{id}")
    public ResponseEntity<Client> getClient(@PathVariable long id) {
        return ResponseEntity.ok().body(clientService.getClient(id));
    }

    @GetMapping
    public ResponseEntity<List<Client>> getClients() {
        return ResponseEntity.ok().body(clientService.getClients());
    }

    @PostMapping
    public ResponseEntity<String> addClient(@RequestBody Client client) {
        clientService.saveClient(client);
        return ResponseEntity.ok("Client saved!!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteClient(@PathVariable long id) {
        clientService.deleteClient(id);
        return ResponseEntity.ok("Client deleted");
    }

}
