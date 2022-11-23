import requester from "./requester";
import {Login} from "../components/LoginComponent";
import {Client} from "./Types";

const info = (token: string | null) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    return requester.get<Client>(
        "/clients",
        config
    )
}

const getToken = (clientForm: Login) => {
    return requester.post<string>("/auth/login", clientForm)
}

const ClientService = {
    info, getToken
}

export default ClientService;