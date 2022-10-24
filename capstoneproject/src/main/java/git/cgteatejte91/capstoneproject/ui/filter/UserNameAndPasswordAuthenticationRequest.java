package git.cgteatejte91.capstoneproject.ui.filter;

public class UserNameAndPasswordAuthenticationRequest {
    private String email;
    private String password;

    public UserNameAndPasswordAuthenticationRequest() {
    }

    public String getUsername() {
        return email;
    }

    public void setUsername(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
