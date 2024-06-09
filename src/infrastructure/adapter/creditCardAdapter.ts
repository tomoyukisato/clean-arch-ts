import { IPaymentRepository } from "src/domain/repository/IPaymentRepository";

export class CreditCardAdapter implements IPaymentRepository {
    externalPaymentExecute(param: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
