package heitorleonny.github.io.expense.mapper;
import heitorleonny.github.io.expense.dto.ExpenseDTO;
import heitorleonny.github.io.expense.model.Expense;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

public class ExpenseMapper {
    public static ExpenseDTO expenseToExpenseDTO(Expense expense) {
        if (expense == null) {
            return null;
        }
        String expensePath = buildExpenseURL(expense).toString();
        return ExpenseDTO.builder()
                .name(expense.getName())
                .description(expense.getDescription())
                .date(expense.getDate())
                .value(expense.getValue())
                .url(expensePath)
                .build();
    }

    private static URI buildExpenseURL(Expense expense){
        String expensePath = "/" + expense.getId();
        return ServletUriComponentsBuilder
                .fromCurrentRequestUri()
                .path(expensePath)
                .build()
                .toUri();
    }
}
