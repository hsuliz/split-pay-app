import {Link, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import SigninPage from "./components/home/signin-page-component";
import ExpensesListComponent from "./components/expenses-list-component";

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
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<SigninPage/>}/>
                    <Route path="/list" element={<ExpensesListComponent/>}/>
                    <Route path="/add"/>
                </Routes>
            </div>
        </div>
    );
}

export default App;