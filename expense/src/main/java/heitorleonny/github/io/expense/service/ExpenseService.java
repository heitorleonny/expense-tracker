package heitorleonny.github.io.expense.service;

import heitorleonny.github.io.expense.model.Expense;
import heitorleonny.github.io.expense.repository.ExpenseRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseService {
    @Autowired
    private ExpenseRepository repository;

    public List<Expense> findAllExpenses(){
        return repository.findAll();
    }

    public void saveExpense(Expense expense){
        repository.save(expense);
    }
}