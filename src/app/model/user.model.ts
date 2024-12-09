export interface User {
    username : string,
    password: string,
    email: string,
    role: Role

}

export enum Role {
    ADMIN = 0, CUSTOMER = 1, SELLER = 2, OTHER = 3
}