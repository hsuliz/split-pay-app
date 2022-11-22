import React, {useState} from "react";
import {Card, Container, Row} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import clientService from "../services/ClientService";
import {Client} from "../services/Types";

export type Login = {
    username: string,
    password: string
}

const LoginComponent: React.FC = () => {

    const [client, setClient] = useState<Client>()
    const [status, setStatus] = useState<"idle" | "verified" | "error">
    ("idle");

    const initialValues: Login = {
        password: "",
        username: ""
    }

    const onSubmitCreate = (data: Login) => {
        console.log(data)
        clientService.getToken(data)
            .then(() => {
                console.log("dude")
            })
            .catch((e: Error) => {
                console.log("im here")
                console.log(e)
            })
    };

    if (status == "idle") {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Formik initialValues={initialValues} onSubmit={onSubmitCreate}>
                            <Form className="form">
                                <Row>
                                    <label>Username</label>
                                    <Field className="input" name="username"/>

                                    <label>Password</label>
                                    <Field className="input" name="password"/>

                                    <button type="submit">Log in</button>
                                </Row>
                            </Form>
                        </Formik>
                    </Card.Body>
                </Card>
            </Container>
        );
    } else if (status == "verified") {
        return (
            <Container>
                fdfdf
            </Container>
        )
    } else {
        return (
            <h1>Pisja popa</h1>
        )
    }

}

export default LoginComponent;