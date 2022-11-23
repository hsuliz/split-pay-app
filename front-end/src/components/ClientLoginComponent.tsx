import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import ClientInfoComponent from "./ClientInfoComponent";
import {Login} from "../types/LoginType";
import ClientAuthService from "../services/ClientAuthService";

const ClientLoginComponent: React.FC = () => {

    const initialValues: Login = {
        password: "",
        username: "",
    }

    const onSubmit = (clientForm: any) => {
        ClientAuthService.getToken(clientForm)
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

export default ClientLoginComponent;