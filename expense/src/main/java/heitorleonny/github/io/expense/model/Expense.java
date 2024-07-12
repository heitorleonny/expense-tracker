package heitorleonny.github.io.expense.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table
@Data
@EntityListeners(AuditingEntityListener.class)
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private Number value;
    @CreatedDate
    private LocalDate date;
    private String description;


}
