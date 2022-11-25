import axios from 'axios';
import authHeader from "./auth-header";
import {Expense} from "../types/expense-type";

const API_URL = 'http://localhost:8080/api/clients';

class ClientService {

    getClientInfo() {
        return axios.get(
            API_URL,
            {headers: authHeader()}
        );
    }

    getClientExpenses() {
        return axios.get(
            API_URL + "/expenses",
            {headers: authHeader()}
        );
    }

    postClientExpense(expense: Expense) {
        return axios.post(
            API_URL + "/expenses",
            expense,
            {headers: authHeader()}
        )
    }

}

export default new ClientService();
