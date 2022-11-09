import React, {useEffect, useState} from "react";
import {Client} from "../services/Types";
import ClientService from "../services/ClientService";

const ExpenseList: React.FC = () => {

    const [clients, setClients] = useState<Array<Client>>([])

    useEffect(() => {
        getClients()
    }, [])

    const getClients = () => {
        ClientService.getClients()
            .then((response: any) => {
                setClients(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div className="container">
            <h3>Clients</h3>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map(client => <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>);
};


export default ExpenseList;