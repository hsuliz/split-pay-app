import React, {ChangeEvent, useState} from "react";
import {Client} from "../services/Types";
import clientService from "../services/clientService";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";

const AddClient: React.FC = () => {

    const initialTutorialState = {
        name: "",
        email: ""
    };

    const [client, setClient] = useState<Client>(initialTutorialState);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setClient({...client, [name]: value});
    };

    const newTutorial = () => {
        setClient(initialTutorialState);
        setSubmitted(false);
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
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });

    };

    return (
        <Container>
            <Form onSubmit={saveTutorial}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" value={client.name || ''}
                           onChange={handleInputChange} autoComplete="name"/>
                </FormGroup>

                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/clients">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    );

}

export default AddClient