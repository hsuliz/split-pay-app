import requester from "./requester";
import {Client} from "./Types";

const getClient = (id: number) => {
    return requester.get<Client>(`/clients/${id}`)
}

const getClients = () => {
    return requester.get<Array<Client>>("/clients")
}

const postClient = (client: Client) => {
    return requester.post<Client>("/clients", client)
}

const ClientService = {
    getClient, getClients, postClient
}

export default ClientService;