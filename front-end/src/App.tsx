import {Link, Route, Routes} from "react-router-dom";
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
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <a href="/" className="navbar-brand">
                        HomePage
                    </a>
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

                    <Route path="/" element={<ClientInfoComponent/>}/>
                    <Route path="/add" element={<ExpenseAdd/>}/>
                    <Route path="/list" element={<ExpensesListComponent/>}/>
                    <Route path="/login" element={<SigninPage/>}/>
                </Routes>
            </div>
        </div>
    );

};

export default App;