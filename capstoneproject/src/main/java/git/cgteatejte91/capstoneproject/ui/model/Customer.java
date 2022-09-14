package git.cgteatejte91.capstoneproject.ui.model;

import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Customer extends WebsiteUser{

    public Customer(String firstName, String lastName, String username, String email, String phoneNumber, Gender gender,
            Address address, LocalDateTime created) {
        super(firstName, lastName, username, email, phoneNumber, gender, address, created);
    }
    
}
