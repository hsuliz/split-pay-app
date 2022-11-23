package com.hsuliz.backend.repository;

import com.hsuliz.backend.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    Optional<List<Expense>> getExpenseByClient_Id(Long id);
}
