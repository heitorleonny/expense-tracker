package heitorleonny.github.io.expense.dto;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@Setter
@Getter
public class ExpenseDTO {
    public String name;
    public Number value;
    public LocalDate date;
    public String description;
    public String url;
}
