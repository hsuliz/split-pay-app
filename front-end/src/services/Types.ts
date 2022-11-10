type Client = {
    id?: number,
    name: string,
    email: string
}

type Expense = {
    id?: number,
    name: string,
    price: string
    clientId: string
}

export type {Client, Expense};
