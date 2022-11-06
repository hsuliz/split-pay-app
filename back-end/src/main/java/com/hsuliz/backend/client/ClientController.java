package com.hsuliz.backend.client;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
@AllArgsConstructor
public class ClientController {

    private final ClientService clientService;

    @PostMapping("/client")
    public ResponseEntity<String> addClient(@RequestBody Client client) {
        clientService.addClient(client);
        return new ResponseEntity<>(
                "Client safed!!", HttpStatus.OK
        );
    }

}
