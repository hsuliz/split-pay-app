package com.hsuliz.backend.controller;

import com.hsuliz.backend.entity.Client;
import com.hsuliz.backend.entity.Expense;
import com.hsuliz.backend.service.client.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/clients")
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ClientController {

    private final ClientService clientService;


    @GetMapping
    public ResponseEntity<Client> getClientInfo(Principal principal) {
        return ResponseEntity
                .ok()
                .body(clientService.getClient(principal));
    }

    @GetMapping("/expenses")
    public ResponseEntity<List<Expense>> getClientExpenses(Principal principal) {
        return ResponseEntity
                .ok()
                .body(clientService.getClientExpenses(principal));
    }

    @PostMapping("/expenses")
    public ResponseEntity<String> addExpense(@RequestBody Expense expense, Principal principal) {
        clientService.addExpense(expense, principal);
        return ResponseEntity.ok().body(
                "Expense for user" + " " + principal.getName() + " was added"
        );
    }

}
