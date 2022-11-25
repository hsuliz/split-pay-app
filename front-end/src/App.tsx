import {Link, Navigate, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import {Button} from "react-bootstrap";
import AuthService from "./services/auth-service";
import ClientInfoComponent from "./components/client-info-component";
import SigninPage from "./components/signin-page-component";
import ExpensesListComponent from "./components/expenses-list-component";
import ExpenseAdd from "./components/expense-add-component";

const App: React.FC = () => {

    const PrivateRoute = ({children}: any) => {
        /*#TODO implement this thing*/
        const auth = false;
        if (auth && children.type.name == "SigninPage") {
            return <Navigate to="/home"/>;
        }
        return auth ? children : <SigninPage/>
    };

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Home page
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/list"} className="nav-link">
                            Expenses
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Add expense
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Button onClick={AuthService.logout} className="nav-link">
                            Log out
                        </Button>
                    </li>
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <ClientInfoComponent/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/list"
                        element={
                            <PrivateRoute>
                                <ExpensesListComponent/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/add"
                        element={
                            <PrivateRoute>
                                <ExpenseAdd/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PrivateRoute>
                                <SigninPage/>
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;
