package heitorleonny.github.io.expense.service;

import heitorleonny.github.io.expense.dto.ExpenseDTO;
import heitorleonny.github.io.expense.mapper.ExpenseMapper;
import heitorleonny.github.io.expense.model.Expense;
import heitorleonny.github.io.expense.repository.ExpenseRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseService {

    @Autowired
    private ExpenseRepository repository;



    public List<ExpenseDTO> findAllExpenses(){
        return repository.findAll().stream().map(ExpenseMapper::expenseToExpenseDTO).collect(Collectors.toList());
    }

    public void saveExpense(Expense expense){
        repository.save(expense);
    }


    public ExpenseDTO findById(UUID id) {
       Expense expense = repository.findById(id).orElseThrow();
        return ExpenseMapper.expenseToExpenseDTO(expense);


    }

    public void updateExpense(Expense expense) {
        Expense newExpense = repository.findById(expense.getId()).orElseThrow();
        newExpense.setName(expense.getName());
        newExpense.setValue(expense.getValue());
        newExpense.setDate(expense.getDate());
        newExpense.setDescription(expense.getDescription());
        repository.save(newExpense);
    }
}
