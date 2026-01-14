import { Transaction } from "@/app/types";
import { fetchAPI } from "../lib/api";

export const transactionCheckout = async (form: FormData): Promise<Transaction> => {
    return await fetchAPI<Transaction>("/transactions/checkout",{
        method: 'POST',
        body: form
    })
}
export const getTransactionById = async (id: string): Promise<Transaction> => {
    return await fetchAPI<Transaction>(`/transactions/${id}`);

};