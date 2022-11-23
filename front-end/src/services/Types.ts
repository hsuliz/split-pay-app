type Client = {
    id: string,
    username?: string,
    email?: string
}

type Expense = {
    id?: number,
    name: string,
    price: string
    client: Client
}

export type {Client, Expense};
