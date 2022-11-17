package git.cgteatejte91.capstoneproject.ui.model.Order;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ShippingAddress {
    private String fullname;
    private String address;
    private String city;
    private String postcode;
    private String country;
}
