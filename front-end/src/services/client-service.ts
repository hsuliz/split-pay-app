import axios from 'axios';
import authHeader from "./auth-header";

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


}

export default new ClientService();
