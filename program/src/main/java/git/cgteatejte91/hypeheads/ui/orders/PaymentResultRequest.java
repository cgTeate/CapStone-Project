package git.cgteatejte91.hypeheads.ui.orders;

import git.cgteatejte91.hypeheads.ui.model.Order.PaymentResult;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class PaymentResultRequest {
    private final PaymentResult paymentResult;
}
