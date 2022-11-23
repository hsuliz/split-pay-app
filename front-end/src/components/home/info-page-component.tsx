import {useEffect, useState} from "react";
import ClientService from "../../services/client-service";
import {ClientType} from "../../types/client-type";

const InfoPage = () => {

    const [client, setClient] = useState<ClientType>();

    useEffect(() => {
        ClientService.getClientInfo()
            .then((response) => {
                setClient(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            })
    }, [])

    return (
        <h1>Hi, {client?.username}</h1>
    )
}

export default InfoPage;
