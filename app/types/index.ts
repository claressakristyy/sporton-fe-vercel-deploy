export interface Category {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAd: string;
    updatedAd: string;
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    category: Category;
    stock: number;
    price: number;  
    createdAd: string;
    updatedAd: string;
}

export interface Bank {
    _id: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
    createdAd: string;
    updatedAd: string;

}

export interface Transaction {
    _id: string;
    paymentProof: string;
    status: "pending" | "paid" | "rejected",
    puchasedItems: {
        productId: string;
        qty: number;
    },
    totalPayment: string; 
    customerName: string;
    customerContact: number | null;
    custumerAddress: string;
    createdAd: string;
    updatedAd: string;
}