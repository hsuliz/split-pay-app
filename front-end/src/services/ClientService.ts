import requester from "./requester";
import {Client} from "../types/Client";

const info = (token: string | null) => {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    return requester.get<Client>(
        "/clients",
        config
    )
}

const ClientService = {
    info
}

export default ClientService;