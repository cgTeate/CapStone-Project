package git.cgteatejte91.capstoneproject.ui.login;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data

public class LoginRequest {
    private final String email;
    private final String password;
}



