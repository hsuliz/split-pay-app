package com.hsuliz.backend.controller;

import com.hsuliz.backend.entity.Client;
import com.hsuliz.backend.entity.Expense;
import com.hsuliz.backend.repository.ClientRepository;
import com.hsuliz.backend.repository.ExpenseRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin
@AllArgsConstructor
public class ClientController {

    private final ClientRepository clientRepository;
    private final ExpenseRepository expenseRepository;

    @GetMapping
    public Client getUserDetails(Principal principal) {
        return clientRepository.findByEmail(principal.getName()).get();
    }

    @PostMapping
    public Client addExpense(@RequestBody Expense expense) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var client = clientRepository.findByEmail(email).get();
        expense.setClient(client);
        expenseRepository.save(expense);
        return client;
    }

}
