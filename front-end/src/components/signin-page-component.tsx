import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Container} from "react-bootstrap";
import {Login} from "../types/login-type";
import AuthService from "../services/auth-service";

const SigninPage: React.FC = () => {

    const [logInMessage, setLogInMessage] = useState<string>("");

    const [signUpMessage, setSignUpMessage] = useState<string>("");

    const initialValues: Login = {
        password: "", username: ""
    };


    const handleLogin = (data: Login) => {
        AuthService.login(data.username, data.password)
            .then(() => {
                window.location.reload();
            })
            .catch((e: Error) => {
                AuthService.deleteCurrentClientToken()
                setLogInMessage(e.message);
                console.log(e);
            });
    };

    const handleCreate = (data: Login) => {
        AuthService.register(data.username, data.password)
            .then(() => {
                setSignUpMessage("Account created!!")
            })
            .catch((e: Error) => {
                setSignUpMessage(e.message);
            });
    };

    const validationSchema = () => {
        return Yup.object().shape({
            username: Yup.string().required("This field is required!!"),
            password: Yup.string().required("This field is required!!")
        });
    };

    return (
        <Container className="row-cols-12">
            <Container>
                <div className="col-md-12">
                    <div className="card card-container">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            <Form>
                                <h1>Log in</h1>
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
                                <p></p>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        <span>Login</span>
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                {logInMessage && (
                    <div className="form-group">
                        <div className="alert alert-info" role="alert">
                            {logInMessage}
                        </div>
                    </div>
                )}
            </Container>
            <Container>
                <div className="col-md-12">
                    <div className="card card-container">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, {resetForm}) => {
                                handleCreate(values)
                                resetForm();
                            }}
                        >
                            <Form>
                                <h1>Create an account</h1>
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
                                <p></p>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        <span>Create</span>
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                {signUpMessage && (
                    <div className="form-group">
                        <div className="alert alert-info" role="alert">
                            {signUpMessage}
                        </div>
                    </div>
                )}
            </Container>
        </Container>
    );

};

export default SigninPage;
