package com.hsuliz.backend.controller;

import com.hsuliz.backend.entity.Client;
import com.hsuliz.backend.entity.Expense;
import com.hsuliz.backend.repository.ClientRepository;
import com.hsuliz.backend.repository.ExpenseRepository;
import lombok.AllArgsConstructor;
import lombok.val;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/clients")
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ClientController {

    private final ClientRepository clientRepository;

    private final ExpenseRepository expenseRepository;

    @GetMapping
    public Client getUserDetails(Principal principal) {
        return clientRepository.findByUsername(principal.getName()).get();
    }

    @GetMapping("/expenses")
    public List<Expense> getUsersExpenses(Principal principal) {
        var clientId = clientRepository.findByUsername(principal.getName()).get().getId();
        val clientExpenses = expenseRepository.getExpenseByClient_Id(clientId);
        return clientExpenses.get();
    }


    @PostMapping
    public Client addExpense(@RequestBody Expense expense) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var client = clientRepository.findByUsername(email).get();
        expense.setClient(client);
        expenseRepository.save(expense);
        return client;
    }

}
