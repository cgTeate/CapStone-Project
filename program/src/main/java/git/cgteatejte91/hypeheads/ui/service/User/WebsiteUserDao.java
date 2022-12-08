package git.cgteatejte91.hypeheads.ui.service.User;

import java.util.List;

import git.cgteatejte91.hypeheads.ui.controllers.WebsiteUserUpdateRequest;
import git.cgteatejte91.hypeheads.ui.model.User.WebsiteUser;

public interface WebsiteUserDao {

    String signUp(WebsiteUser websiteUser);
    // String signIn(WebsiteUser websiteUser);
    WebsiteUser getUser(String username);
    // List<WebsiteUser> getUser(String username);
    List<WebsiteUser> getAllSellers();
    List<WebsiteUser> getAllCustomers();
    List<WebsiteUser> getAllUsers();
    List<WebsiteUser> getSingleUser(WebsiteUser user);
    void deleteUser(String username);
    void updateUser(String username, WebsiteUserUpdateRequest user);
    // WebsiteUser updateUser(String username, WebsiteUser user);

}

