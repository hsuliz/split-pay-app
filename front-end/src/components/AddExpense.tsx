import React from "react";
import {Expense} from "../services/Types";
import expenseService from "../services/ExpenseService";
import {Card, Container, Row} from "react-bootstrap";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

function AddExpense() {

    const navigate = useNavigate();

    const initialValues: Expense = {
        client: {
            id: ""
        },
        name: "",
        price: ""
    };

    const onSubmitCreate = (data: any) => {
        console.log(data)
        expenseService.post(data)
            .then(() => navigate("/list"))
            .catch((e: Error) => {
                console.log(e);
            })
    };

    return (
        <Container>
            <Card>
                <h2 className="text-center">Add expense</h2>
                <Card.Body>
                    <Formik initialValues={initialValues} onSubmit={onSubmitCreate}>
                        <Form className="form">
                            <Row>
                                <label>Expense</label>
                                <ErrorMessage name="expense" component="span"/>
                                <Field className="input" name="name"/>

                                <label>Price</label>
                                <ErrorMessage name="price" component="span"/>
                                <Field className="input" name="price"/>

                                <label>Id</label>
                                <ErrorMessage name="id" component="span"/>
                                <Field className="input" name="client.id"/>

                                <button type="submit">Add expense</button>
                            </Row>
                        </Form>
                    </Formik>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AddExpense