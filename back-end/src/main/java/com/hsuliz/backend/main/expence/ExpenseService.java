package com.hsuliz.backend.main.expence;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ExpenseService {

    private final ExpenseRepository expenseRepository;


    public Expense getExpense(long id) {
        return expenseRepository
                .findById(id)
                .orElseThrow(RuntimeException::new);
    }

    public List<Expense> getExpenses() {
        return expenseRepository.findAll();
    }

    public void saveExpense(Expense expense) {
        expenseRepository.save(expense);
    }

    public void deleteExpense(long id) {
        expenseRepository.deleteById(id);
    }

}
