import requester from "./requester";
import {Expense} from "./Types";

const getExpense = (id: number) => {
    return requester.get<Expense>(`/expenses/${id}`)
}

const getExpenses = () => {
    return requester.get<Array<Expense>>("/expenses")
}

const postExpense = (client: Expense) => {
    return requester.post<Expense>("/expenses", client)
}

const ExpenseService = {
    getExpense, getExpenses, postExpense
}

export default ExpenseService;