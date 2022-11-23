import {Client} from "./Client";

export type Expense = {
    id?: number,
    name: string,
    price: string
    client: Client
}