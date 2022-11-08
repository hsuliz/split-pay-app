import React, {ChangeEvent, useState} from "react";
import {Client} from "../services/Types";
import clientService from "../services/clientService";

const AddClient: React.FC = () => {

    const initialTutorialState = {
        name: "",
        email: ""
    }

    const [client, setClient] = useState<Client>(initialTutorialState);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setClient({...client, [name]: value});
    };

    const saveTutorial = () => {

        const data = {
            name: client.name,
            email: client.email
        };

        clientService.postClient(data)
            .then((response: any) => {
                setClient({
                    name: response.data.name,
                    email: response.data.email,
                });
                console.log("success");
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div className="container">
            <h3>Add client</h3>
            <form onSubmit={saveTutorial}>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter name"
                        onChange={handleInputChange}
                        value={client.name}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={handleInputChange}
                        value={client.email}
                        required
                    />
                </div>

                <button className="btn btn-success">
                    Submit
                </button>

            </form>
        </div>
    );

}

export default AddClient