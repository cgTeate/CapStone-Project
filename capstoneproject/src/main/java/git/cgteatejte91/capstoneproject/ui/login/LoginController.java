package git.cgteatejte91.capstoneproject.ui.login;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/login")
@AllArgsConstructor
// @CrossOrigin(origins = "http://localhost:3000, http://localhost:8080")

public class LoginController {
    private final LoginService loginService;

    @PostMapping
    public String login(@RequestBody LoginRequest request) {
      return loginService.login(request);
    } 
}





