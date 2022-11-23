import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import clientService from "../services/ClientService";
import ClientInfoComponent from "./ClientInfoComponent";

export type Login = {
    username: string,
    password: string
}

const LoginComponent: React.FC = () => {

    const initialValues: Login = {
        password: "",
        username: "",
    }

    const onSubmit = (loginVal: any) => {
        clientService.getToken(loginVal)
            .then(r => {
                localStorage.setItem("token", r.data);
                window.location.reload();
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

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
            <ClientInfoComponent/>
        )
    }

}

export default LoginComponent;