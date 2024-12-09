export interface Seller {
    id: number;
    username: string;
    email: string;
}

export interface Sale {
    id: number,
    itemName: string,
    amount: number,
    dateOfSale: string,
    dateOfOrder: string

}

export enum SaleStatus {
    PAINDING = 1, CANCELLED = 2, DONE = 3
}