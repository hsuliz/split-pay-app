package com.hsuliz.backend.controller;

import com.hsuliz.backend.service.ExpenseService;
import com.hsuliz.backend.entity.Expense;
import io.swagger.annotations.ApiOperation;
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
    @ApiOperation(
            value = "Find expense by id",
            notes = "Returns expense by id"
    )
    public ResponseEntity<Expense> getExpense(@PathVariable long id) {
        return ResponseEntity.ok().body(expenseService.getExpense(id));
    }

    @GetMapping
    @ApiOperation(
            value = "Get all expenses",
            notes = "Returns list of expenses"
    )
    public ResponseEntity<List<Expense>> getExpenses() {
        return ResponseEntity.ok().body(expenseService.getExpenses());
    }

    @PostMapping
    @ApiOperation(
            value = "Add expense",
            notes = "Returns list of expenses"
    )
    public ResponseEntity<String> addExpense(@RequestBody Expense expense) {
        expenseService.saveExpense(expense);
        return ResponseEntity.ok("Expense saved!!");
    }

    @DeleteMapping("/{id}")
    @ApiOperation(
            value = "Delete expense",
            notes = "Returns list of expenses"
    )
    public ResponseEntity<String> deleteExpense(@PathVariable long id) {
        expenseService.deleteExpense(id);
        return ResponseEntity.ok("Expense deleted!!");
    }

}
