import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import AuthService from "../../services/auth-service";
import {Login} from "../../types/login-type";
import * as Yup from "yup";
import InfoPage from "./info-page-component";
import {Container} from "react-bootstrap";
import ClientService from "../../services/client-service";

const SigninPage: React.FC = () => {

    const [authenticated, setAuthenticated] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<string>("");

    const initialValues: Login = {
        password: "", username: ""
    };


    useEffect(() => {
        ClientService.getClientInfo()
            .then(() => {
                setAuthenticated(true)
            })
    }, []);

    const handleLogin = (data: Login) => {
        AuthService.login(data.username, data.password)
            .then(() => {
                setAuthenticated(true);
            })
            .catch((e: Error) => {
                setAuthenticated(false);
                setErrorMessage(e.message);
                console.log(e);
            });
    };

    const validationSchema = () => {
        return Yup.object().shape({
            username: Yup.string().required("This field is required!!"),
            password: Yup.string().required("This field is required!!")
        });
    };

    if (authenticated) {
        return <InfoPage/>
    }

    return (
        <Container>
            <div className="col-md-12">
                <div className="card card-container">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Field name="username" type="text" className="form-control"/>
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className="form-control"/>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">
                                    <span>Login</span>
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
            {errorMessage && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                </div>
            )}
        </Container>
    );

};

export default SigninPage;
