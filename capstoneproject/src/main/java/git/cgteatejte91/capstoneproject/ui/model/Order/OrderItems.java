package git.cgteatejte91.capstoneproject.ui.model.Order;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OrderItems {
    private String productName;
    private int quantity;
    private String thumbnail;
    private float retailPrice;
}
