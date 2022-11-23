import React, {useEffect, useState} from "react";
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

    const initialValues: Login = {
        password: "",
        username: ""
    }

    const onSubmit = (loginVal: any) => {
        clientService.getToken(loginVal)
            .then(r => {
                localStorage.setItem("token", r.data)
                console.log(localStorage.getItem("token"));
            })
            .catch((e: Error) => {
                console.log(e);
            })
    };

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

    if (localStorage.getItem("token") == null) {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
    } else {
        return (
            <Container>
                <h2 className="text-center">Client detail</h2>
                {getInfo()}
            </Container>
        )
    }

}

export default LoginComponent;