package git.cgteatejte91.hypeheads.ui.paypal;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Data;

@Configuration
@Data
@ConfigurationProperties(prefix = "spring.paypal")
public class PaypalConfig {
    private String clientId;
    private String clientSecret;
    private String mode;
    private String baseUrl;

}
