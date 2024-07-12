package heitorleonny.github.io.expense.mapper;
import heitorleonny.github.io.expense.dto.ExpenseDTO;
import heitorleonny.github.io.expense.model.Expense;

public class ExpenseMapper {
    public static ExpenseDTO expenseToExpenseDTO(Expense expense) {
        if (expense == null) {
            return null;
        }

        return ExpenseDTO.builder()
                .name(expense.getName())
                .description(expense.getDescription())
                .date(expense.getDate())
                .value(expense.getValue())
                .build();
    }
}
