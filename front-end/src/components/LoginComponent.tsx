import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import clientService from "../services/ClientService";

export type Login = {
    username: string,
    password: string
}

const LoginComponent: React.FC = () => {

    const navigate = useNavigate();

    const initialValues: Login = {
        password: "",
        username: ""
    }

    const onSubmitCreate = (data: Login) => {
        console.log(data)
        clientService.getToken(data)
            .catch((e: Error) => {
                console.log(e);
            })
        /*expenseService.post(data)
            .then(() => navigate("/list"))
            .catch((e: Error) => {
                console.log(e);
            })*/
    };


    return (
        <Container>
            <Card>
                <Card.Body>
                    <Formik initialValues={initialValues} onSubmit={onSubmitCreate}>
                        <Form className="form">
                            <Row>
                                <label>Expense</label>
                                <Field className="input" name="username"/>

                                <label>Price</label>
                                <Field className="input" name="password"/>

                                <button type="submit">Log in</button>
                            </Row>
                        </Form>
                    </Formik>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginComponent;