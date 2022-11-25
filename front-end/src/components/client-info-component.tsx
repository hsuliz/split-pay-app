import React, {useEffect, useState} from 'react';
import {ClientType} from "../types/client-type";
import ClientService from "../services/client-service";

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
        <div>
            2323
        </div>
    );

};

export default ClientInfoComponent;