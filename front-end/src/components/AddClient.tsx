import React, {ChangeEvent, useState} from "react";
import {Client} from "../services/Types";
import clientService from "../services/clientService";

const AddClient: React.FC = () => {

    const initialTutorialState = {
        name: "",
        email: ""
    }

    const [client, setClient] = useState<Client>(initialTutorialState);
    const [submitted, setSubmitted] = useState<boolean>(false);

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
                setSubmitted(true);
                console.log("success");
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const newTutorial = () => {
        setClient(initialTutorialState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newTutorial}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={client.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="email"
                            className="form-control"
                            id="description"
                            required
                            value={client.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </div>

                    <button onClick={saveTutorial} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );

}

export default AddClient