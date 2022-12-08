package git.cgteatejte91.hypeheads.ui.model.User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@ToString
@Data
@Document()
public class WebsiteUser implements UserDetails{
    @Id
    private String id;
    private String firstName;
    private String lastName;
    @Indexed(unique = true)
    private String username;
    private String password;
    private UserRole role;
    private LocalDate dob;
    private String phoneNumber;
    private Gender gender;
    private Address address;
    private String created;
    // @Transient
    // private Integer age;

    public WebsiteUser() {
        created = LocalDateTime.now().toString();
    }

    public WebsiteUser(String username, String password) {
        this.username = username;
        this.password = password;
    }
    

    public WebsiteUser(String firstName, String lastName, String username, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }

    public WebsiteUser(String firstName, String lastName, String username, String password, UserRole role, LocalDate dob,
            String phoneNumber, Gender gender, Address address, String created) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.role = role;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.address = address;
        this.created = created;
    }

    // public Integer getAge() {
    //     return Period.between(this.dob, LocalDate.now()).getYears();
    // }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List <SimpleGrantedAuthority> authority =
                new ArrayList<>(role.getGrantedAuthorities());
        return authority;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
