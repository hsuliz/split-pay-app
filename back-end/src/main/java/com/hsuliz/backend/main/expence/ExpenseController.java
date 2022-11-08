package com.hsuliz.backend.main.expence;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin
@AllArgsConstructor
public class ExpenseController {

    private final ExpenseService expenseService;


    @GetMapping("/{id}")
    public ResponseEntity<Expense> getExpense(@PathVariable long id) {
        return ResponseEntity.ok().body(expenseService.getExpense(id));
    }

    @GetMapping
    public ResponseEntity<List<Expense>> getExpenses() {
        return ResponseEntity.ok().body(expenseService.getExpenses());
    }

    @PostMapping
    public ResponseEntity<String> addExpense(@RequestBody Expense expense) {
        expenseService.saveExpense(expense);
        return ResponseEntity.ok("Expense saved!!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExpense(@PathVariable long id) {
        expenseService.deleteExpense(id);
        return ResponseEntity.ok("Expense deleted!!");
    }
}
