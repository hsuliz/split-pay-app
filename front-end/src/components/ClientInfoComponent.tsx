import React, {useEffect, useState} from "react";
import clientService from "../services/ClientService";
import {Client} from "../services/Types";
import {Container} from "react-bootstrap";


const ClientInfoComponent: React.FC = () => {

    const [client, setClient] = useState<Client>()

    useEffect(() => {
        clientService.info(localStorage.getItem("token"))
            .then((r) => {
                setClient(r.data)
                console.log(r.data);
            })
    }, [])

    const getInfo = () => {
        return (
            <Container>
                {client?.id} {client?.username}
            </Container>
        )
    }

    return (
        <Container>
            <h2 className="text-center">Client detail</h2>
            {getInfo()}
        </Container>
    )
}

export default ClientInfoComponent