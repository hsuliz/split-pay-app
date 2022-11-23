import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import authService from "../../services/auth-service";
import AuthService from "../../services/auth-service";
import {Login} from "../../types/login-type";
import * as Yup from "yup";
import InfoPage from "./info-page-component";

const LoginPage: React.FC = () => {

    const [authenticated, setAuthenticated] = useState<boolean>(false);

    const initialValues: Login = {
        password: "", username: ""
    };


    useEffect(() => {
        const currentUser = authService.getCurrentClientToken();
        if (currentUser) {
            setAuthenticated(true);
        }
    }, []);

    const handleLogin = (data: Login) => {
        AuthService.login(data.username, data.password)
            .then((response) => {
                setAuthenticated(true);
            })
            .catch((e: Error) => {
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
    );
};

export default LoginPage;
