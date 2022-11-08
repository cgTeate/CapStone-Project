package git.cgteatejte91.capstoneproject.ui.model.User;

import com.google.common.collect.Sets;

import static git.cgteatejte91.capstoneproject.ui.model.User.WebsiteUserPermission.*;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;


public enum UserRole {
    CUSTOMER(Sets.newHashSet(ACCOUNT_READ,ACCOUNT_WRITE, PRODUCT_READ)),
    SELLER(Sets.newHashSet(ACCOUNT_READ, ACCOUNT_WRITE, PRODUCT_READ, PRODUCT_WRITE)),
    ADMIN(Sets.newHashSet(ACCOUNT_READ, ACCOUNT_WRITE, PRODUCT_READ, PRODUCT_WRITE));

    private final Set<WebsiteUserPermission> permissions;

    UserRole(Set<WebsiteUserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<WebsiteUserPermission> getPermissions() {
        return permissions;
    }

    public Set<SimpleGrantedAuthority> getGrantedAuthorities() {
        Set<SimpleGrantedAuthority> permissions = getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
        permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return permissions;
    }
}
