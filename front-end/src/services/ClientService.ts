import requester from "./requester";
import {ClientType} from "../types/ClientType";
import {Expense} from "../types/ExpenseType";

const info = (token: string | null) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    return requester.get<ClientType>(
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

const addExpense = (token: string | null, expense: any) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    return requester.post<String>(
        "/clients/expenses",
        expense,
        config
    )
}

const ClientService = {
    info, expenses, addExpense
}

export default ClientService;