package git.cgteatejte91.hypeheads.ui.model.Order;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OrderItems {
    private String productName;
    private String slug;
    private int quantity;
    private String thumbnail;
    private float retailPrice;
}
