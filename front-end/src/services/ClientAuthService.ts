import requester from "./requester";
import {Login} from "../types/LoginType";

const getToken = (clientForm: Login) => {
    return requester.post<string>("/auth/login", clientForm)
}

const ClientAuthService = {
    getToken,
}

export default ClientAuthService