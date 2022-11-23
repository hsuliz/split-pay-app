import React from "react";
import {Expense} from "../types/ExpenseType";
import ClientService from "../services/ClientService";
import {Card, Container, Row} from "react-bootstrap";
import {Field, Form, Formik} from "formik";

const ExpenseAddComponent: React.FC = () => {

    const initialValues: Expense = {
        name: "",
        price: ""
    }


    const onSubmit = (expenseVal: any) => {
        ClientService.addExpense(localStorage.getItem("token"), expenseVal)
            .then(r => {
                window.location.reload();
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        <Form className="form">
                            <Row>
                                <label>Expense</label>
                                <Field className="input" name="name"/>

                                <label>Price</label>
                                <Field className="input" name="price"/>

                                <button type="submit">Add!!</button>
                            </Row>
                        </Form>
                    </Formik>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ExpenseAddComponent;