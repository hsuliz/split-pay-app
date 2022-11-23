import requester from "./requester";
import {Login} from "../types/LoginType";
// #TODO correct mapping for requests and create new user component
const getToken = (clientForm: Login) => {
    return requester.post<string>("/auth/login", clientForm)
}

const ClientAuthService = {
    getToken,
}

export default ClientAuthService