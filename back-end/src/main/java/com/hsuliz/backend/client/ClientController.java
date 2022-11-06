package com.hsuliz.backend.client;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
@AllArgsConstructor
public class ClientController {

    private final ClientService clientService;

    @GetMapping("/clients/{id}")
    public ResponseEntity<Client> getClient(@PathVariable long id) {
        return new ResponseEntity<>(clientService.getClient(id), HttpStatus.OK);
    }

    @GetMapping("/clients")
    public ResponseEntity<List<Client>> getClients() {
        return new ResponseEntity<>(clientService.getClients(), HttpStatus.OK);
    }

    @PostMapping("/clients")
    public ResponseEntity<String> addClient(@RequestBody Client client) {
        clientService.saveClient(client);
        return new ResponseEntity<>("Client saved!!", HttpStatus.OK);
    }

}
