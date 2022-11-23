type Client = {
    id: string,
    username?: string,
    password?: string
}

type Expense = {
    id?: number,
    name: string,
    price: string
    client: Client
}

export type {Client, Expense};
