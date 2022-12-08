package git.cgteatejte91.hypeheads.ui.registration;

import java.time.LocalDate;
import java.time.LocalDateTime;

import git.cgteatejte91.hypeheads.ui.model.User.Address;
import git.cgteatejte91.hypeheads.ui.model.User.Gender;
import git.cgteatejte91.hypeheads.ui.model.User.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class RegistrationRequest {
    private final String firstName;
    private final String lastName;
    private final String username;
    private final String password;
    private final UserRole role;
    private final LocalDate dob;
    private final String phoneNumber;
    private final Gender gender;
    private final Address address;
    private final String created = LocalDateTime.now().toString();
}
