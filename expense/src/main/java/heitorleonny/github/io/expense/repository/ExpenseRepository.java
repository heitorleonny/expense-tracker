package heitorleonny.github.io.expense.repository;

import heitorleonny.github.io.expense.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ExpenseRepository extends JpaRepository<Expense, UUID> {
}