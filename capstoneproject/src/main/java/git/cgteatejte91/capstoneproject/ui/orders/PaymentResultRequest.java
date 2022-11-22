package git.cgteatejte91.capstoneproject.ui.orders;

import git.cgteatejte91.capstoneproject.ui.model.Order.PaymentResult;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class PaymentResultRequest {
    private final PaymentResult paymentResult;
}
