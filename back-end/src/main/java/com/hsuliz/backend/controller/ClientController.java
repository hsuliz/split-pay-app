package com.hsuliz.backend.controller;

import com.hsuliz.backend.service.ClientService;
import com.hsuliz.backend.model.Client;
import io.swagger.annotations.ApiOperation;
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
    @ApiOperation(
            value = "Find client by id",
            notes = "Returns client by id"
    )
    public ResponseEntity<Client> getClient(@PathVariable long id) {
        return ResponseEntity.ok().body(clientService.getClient(id));
    }

    @GetMapping
    @ApiOperation(
            value = "Get all clients",
            notes = "Returns list of clients"
    )
    public ResponseEntity<List<Client>> getClients() {
        return ResponseEntity.ok().body(clientService.getClients());
    }

    @PostMapping
    @ApiOperation(
            value = "Add client",
            notes = "Returns successful message"
    )
    public ResponseEntity<String> addClient(@RequestBody Client client) {
        clientService.saveClient(client);
        return ResponseEntity.ok("Client saved!!");
    }

    @DeleteMapping("/{id}")
    @ApiOperation(
            value = "Delete client",
            notes = "Returns successful message"

    )
    public ResponseEntity<String> deleteClient(@PathVariable long id) {
        clientService.deleteClient(id);
        return ResponseEntity.ok("Client deleted!!");
    }

}
