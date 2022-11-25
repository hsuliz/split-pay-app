import React, {useEffect, useState} from 'react';
import {ClientType} from "../types/client-type";
import ClientService from "../services/client-service";
import {Container} from "react-bootstrap";

const ClientInfoComponent = () => {

    const [client, setClient] = useState<ClientType>();


    useEffect(() => {
        ClientService.getClientInfo()
            .then((response) => {
                setClient(response.data);
            })
            .catch((e: Error) => {
                console.error(e);
            });
    }, []);

    return (
        <Container>
            <h1 className="text-center"> Client info </h1>
            <h2>Hello, {client?.username}</h2>
        </Container>
    );

};

export default ClientInfoComponent;
