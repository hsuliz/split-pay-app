import requester from "./requester";
import {Client} from "./Types";
import {Login} from "../components/LoginComponent";

const getClient = (id: number) => {
    return requester.get<Client>(`/clients/${id}`)
}

const getClients = () => {
    return requester.get<Array<Client>>("/clients")
}

const postClient = (client: Client) => {
    return requester.post<Client>("/clients", client)
}

const logIn = (clientForm: Login, token: string) => {

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    const bodyParameters = {
        key: "value"
    };

    return requester.post<Login>(
        "/auth/login", bodyParameters, config
    ).then(console.log).catch(console.log);
}

const getToken = (clientForm: Login) => {
    return requester.post<Login>("/auth/login", clientForm)
}

const ClientService = {
    getClient, getClients, postClient, logIn, getToken
}

export default ClientService;