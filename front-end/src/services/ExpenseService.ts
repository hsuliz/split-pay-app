import requester from "./requester";
import {Expense} from "./Types";

const getExpense = (id: number) => {
    return requester.get<Expense>(`/expenses/${id}`)
}

const getExpenses = () => {
    return requester.get<Array<Expense>>("/expenses")
}

const post = (expense: Expense) => {
    return requester.post<Expense>("/expenses", expense)
}

const ExpenseService = {
    getExpense, getExpenses, post
}

export default ExpenseService;