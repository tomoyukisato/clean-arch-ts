export interface IPaymentRepository {
    externalPaymentExecute(param: any): Promise<any>;
}
