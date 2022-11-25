package git.cgteatejte91.capstoneproject.ui.controllers;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data

public class WebsiteUserUpdateRequest {
    private final String firstName;
    private final String lastName;
    private final String username;
    private final String password;
}
