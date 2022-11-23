import React, {useEffect, useState} from "react";
import clientService from "../services/ClientService";
import {Container} from "react-bootstrap";
import {ClientType} from "../types/ClientType";


const ClientInfoComponent: React.FC = () => {

    const [client, setClient] = useState<ClientType>()


    useEffect(() => {
        clientService.info(localStorage.getItem("token"))
            .then((r) => {
                setClient(r.data)
            })
            .catch((e: Error) => {
                console.log(e)
            })
    }, [])

    return (
        <Container>
            <h2 className="text-center">Client details</h2>
            <Container>
                {client?.id} {client?.username}
            </Container>
        </Container>
    )
}

export default ClientInfoComponent