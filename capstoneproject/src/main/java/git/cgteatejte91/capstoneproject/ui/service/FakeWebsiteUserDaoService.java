package git.cgteatejte91.capstoneproject.ui.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@Repository("fake")
public class FakeWebsiteUserDaoService implements WebsiteUserServiceDao {

    private final PasswordEncoder passwordEncorder;

    @Autowired
    public FakeWebsiteUserDaoService(PasswordEncoder passwordEncorder) {
        this.passwordEncorder = passwordEncorder;
    };

    @Override
    public Optional<WebsiteUser> selectApplicationUserByEmail(String email) {
        return getWebsiteUsers().stream().filter(applicationUser -> email.equals(applicationUser.getEmail())).findFirst();
    }

    private List<WebsiteUser> getWebsiteUsers() 
    {
        List<WebsiteUser> webiteUsers = Arrays.asList(
            new WebsiteUser(
                        "anh.le@washburn.edu",
                        passwordEncorder.encode("password")



        ));

        return webiteUsers;
    }

}