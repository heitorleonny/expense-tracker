package heitorleonny.github.io.expense.controller;

import heitorleonny.github.io.expense.model.Expense;
import heitorleonny.github.io.expense.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/expense")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public List<Expense> findAllExpenses(){
        return expenseService.findAllExpenses();
    }

    @PostMapping
    public void saveExpense(@RequestBody Expense expense){
        expenseService.saveExpense(expense);

    }
}
