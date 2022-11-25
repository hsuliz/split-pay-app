package com.hsuliz.backend.service.client;

import com.hsuliz.backend.entity.Client;
import com.hsuliz.backend.entity.Expense;
import com.hsuliz.backend.exception.ClientNotFoundException;
import com.hsuliz.backend.exception.ExpenseNotFoundException;
import com.hsuliz.backend.repository.ClientRepository;
import com.hsuliz.backend.repository.ExpenseRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
@AllArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    private final ExpenseRepository expenseRepository;


    public Client getClient(Principal principal) {
        return clientRepository
                .findByUsername(principal.getName())
                .orElseThrow(() -> new ClientNotFoundException(principal.getName()));
    }

    public List<Expense> getClientExpenses(Principal principal) {
        var clientId = getClient(principal).getId();
        return expenseRepository
                .getExpenseByClient_Id(clientId)
                .orElseThrow(() -> new ExpenseNotFoundException(principal.getName()));
    }

    public void addExpense(Expense expense, Principal principal) {
        expense.setClient(getClient(principal));
        expenseRepository.save(expense);
    }

}
