import requester from "./requester";
import {Client} from "../types/Client";
import {Expense} from "../types/ExpenseType";

const info = (token: string | null) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    return requester.get<Client>(
        "/clients",
        config
    )
}

const expenses = (token: string | null) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    return requester.get<Array<Expense>>(
        "/clients/expenses",
        config
    )
}

const addExpense = (token: string | null) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    return requester.get<Array<Expense>>(
        "/clients/expenses",
        config
    )
}

const ClientService = {
    info, expenses
}

export default ClientService;