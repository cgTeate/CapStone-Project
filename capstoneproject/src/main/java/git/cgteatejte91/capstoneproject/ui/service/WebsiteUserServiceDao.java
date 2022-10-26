package git.cgteatejte91.capstoneproject.ui.service;

import java.util.Optional;

import git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUser;

public interface WebsiteUserServiceDao {
    public Optional<WebsiteUser> selectApplicationUserByEmail(String email);
    

}
