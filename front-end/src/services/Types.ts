type Client = {
    id: string,
    name?: string,
    email?: string
}

type Expense = {
    id?: number,
    name: string,
    price: string
    client: Client
}

export type {Client, Expense};
