import {Link, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import ExpenseList from "./components/ExpenseList";
import LoginComponent from "./components/LoginComponent";
import AddExpense from "./components/AddExpense";
import {Button} from "react-bootstrap";

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
                        <Button onClick={() => localStorage.clear()}>
                            Log out
                        </Button>
                    </li>
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path="/list" element={<ExpenseList/>}/>
                    <Route path="/add" element={<AddExpense/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;