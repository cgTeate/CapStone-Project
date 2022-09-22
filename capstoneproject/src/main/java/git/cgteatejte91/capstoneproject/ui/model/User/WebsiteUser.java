package git.cgteatejte91.capstoneproject.ui.model.User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@ToString
@Data
@Document
public class WebsiteUser {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String username;
    @Indexed(unique = true)
    private String email;
    private String password;
    private LocalDate dob;
    private String phoneNumber;
    private Gender gender;
    private Address address;
    private String created;
    @Transient
    private Integer age;

    

    public WebsiteUser() {
        created = LocalDateTime.now().toString();
    }

    public WebsiteUser(String firstName, String lastName, String username, String email, String password, LocalDate dob,
         String phoneNumber, Gender gender, Address address, String created) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.address = address;
        this.created = created;
    }

    public Integer getAge() {
        return Period.between(this.dob, LocalDate.now()).getYears();
    }

    
}
