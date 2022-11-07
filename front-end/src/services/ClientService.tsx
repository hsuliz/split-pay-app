import requester from "./requester";
import {Client} from "./Types";

const getClient = (id: number) => {
    return requester.get<Client>(`/clients/${id}`)
}

const getClients = () => {
    return requester.get<Array<Client>>("/clients")
}

const ClientService = {
    getClient, getClients
}

export default ClientService;