import {Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Expense} from "../types/expense-type";
import * as Yup from "yup";
import ClientService from "../services/client-service";
import {ErrorMessage, Field, Form, Formik} from "formik";

const ExpenseAdd = () => {

    const [authenticated, setAuthenticated] = useState<boolean>(false);

    const initialValues: Expense = {name: "", price: ""}

    useEffect(() => {
        ClientService.getClientExpenses()
            .then((response) => {
                setAuthenticated(true)
            })
    }, []);

    const validationSchema = () => {
        return Yup.object().shape({
            name: Yup.string().required("This field is required!!"),
            price: Yup.string().required("This field is required!!")
        });
    };

    const onSubmit = (expense: Expense) => {
        console.log(expense);
        ClientService.postClientExpense(expense)
            .then((r: any) => {
                console.log(r);
            })
            .catch((e: Error) => {
                console.log(e);
            })
    }

    if (!authenticated) {
        return (
            <h1 className="text-center"> No auth </h1>
        )
    }

    return (
        <Container>
            <div className="col-md-12">
                <div className="card card-container">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Expense</label>
                                <Field name="name" type="text" className="form-control"/>
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <Field name="price" type="text" className="form-control"/>
                                <ErrorMessage
                                    name="price"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">
                                    <span>Add</span>
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Container>
    );
};

export default ExpenseAdd;