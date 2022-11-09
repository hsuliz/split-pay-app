import requester from "./requester";
import {Expense} from "./Types";

const getExpense = (id: number) => {
    return requester.get<Expense>(`/clients/${id}`)
}

const getExpenses = () => {
    return requester.get<Array<Expense>>("/clients")
}

const postExpense = (client: Expense) => {
    return requester.post<Expense>("/clients", client)
}

const ExpenseService = {
    getExpense, getExpenses, postExpense
}

export default ExpenseService;