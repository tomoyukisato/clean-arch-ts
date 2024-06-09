import { PaymentMethod } from "./payment_method";

// TBD
export class CreditCard extends PaymentMethod {
    maskedCardNo: String;
    holderName: String;
    expiredYearMonth: String;

    public constructor(
        maskedCardNo: String,
        holderName: String,
        expiredYearMonth: String
    ) {
        super();
        this.maskedCardNo = maskedCardNo;
        this.holderName = holderName;
        this.expiredYearMonth = expiredYearMonth;
    }
}
