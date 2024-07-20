package heitorleonny.github.io.expense.controller;

import heitorleonny.github.io.expense.dto.ExpenseDTO;
import heitorleonny.github.io.expense.model.Expense;
import heitorleonny.github.io.expense.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/api/v1/expense")
@CrossOrigin("*")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public List<ExpenseDTO> findAllExpenses(){
        return expenseService.findAllExpenses();
    }

    @GetMapping("/{id}")
    public ExpenseDTO findById(@PathVariable UUID id){
        return expenseService.findById(id);
    }

    @PostMapping
    public void saveExpense(@RequestBody Expense expense){
        expenseService.saveExpense(expense);


    }

    @PutMapping
    public void updateExpense(@RequestBody Expense expense){
        expenseService.updateExpense(expense);
    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable UUID id){
        expenseService.deleteExpense(id);
    }


}
