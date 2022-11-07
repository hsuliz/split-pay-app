import requester from "./requester";

type Client = {
    id: number
}

const getClient = (id: number) => {
    return requester.get<Client>(`/clients/${id}`)
}

const getClients = () => {
    return requester.get<Array<Client>>("/clients")
}

const ClientService = {
    getClient,
    getClients
}

export default ClientService;