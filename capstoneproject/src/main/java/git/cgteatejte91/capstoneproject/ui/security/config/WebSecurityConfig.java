package git.cgteatejte91.capstoneproject.ui.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import git.cgteatejte91.capstoneproject.ui.service.WebsiteUserService;
import lombok.AllArgsConstructor;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig {

    private final WebsiteUserService websiteUserService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    //WebSecurityConfigurerAdapter deprecated, so changed to below
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
             http
             .csrf().disable()
             .authorizeRequests()
             .antMatchers("/api/registration/**")
             .permitAll()
             .anyRequest().authenticated().and().formLogin();
        return http.build();
    }

    
    @Bean
    @Primary
    public AuthenticationManagerBuilder authenticationManager(
        AuthenticationManagerBuilder auth) throws Exception {
    return auth.authenticationProvider(daoAuthenticationProvider());
}

@Bean
public DaoAuthenticationProvider daoAuthenticationProvider() {
    DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
    provider.setPasswordEncoder(bCryptPasswordEncoder);
    provider.setUserDetailsService(websiteUserService);

    return provider;
}


}
