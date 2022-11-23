package com.hsuliz.backend.controller;

import com.hsuliz.backend.entity.Client;
import com.hsuliz.backend.entity.Expense;
import com.hsuliz.backend.repository.ClientRepository;
import com.hsuliz.backend.repository.ExpenseRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/clients")
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class ClientController {

    private final ClientRepository clientRepository;

    private final ExpenseRepository expenseRepository;

    @GetMapping
    public Client getClientInfo(Principal principal) {
        return clientRepository.findByUsername(principal.getName()).get();
    }

    @GetMapping("/expenses")
    public List<Expense> getUsersExpenses(Principal principal) {
        var clientId = clientRepository.findByUsername(principal.getName()).get().getId();
        val clientExpenses = expenseRepository.getExpenseByClient_Id(clientId);
        return clientExpenses.get();
    }


    @PostMapping("/expenses")
    public ResponseEntity<String> addExpense(@RequestBody Expense expense, Principal principal) {
        log.info("Im here");
        var client = clientRepository.findByUsername(principal.getName()).get();
        expense.setClient(client);
        expenseRepository.save(expense);
        return ResponseEntity.ok().body("Expense for user" + " " + client.getUsername() + " was added");
    }

}
