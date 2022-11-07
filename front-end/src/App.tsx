import {Link, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import ClientsList from "./components/ClientsList";
import LoginComponent from "./components/LoginComponent";
import AddClient from "./components/AddClient";

const App: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <a href="/" className="navbar-brand">
                        HomePage
                    </a>
                    <li className="nav-item">
                        <Link to={"/clients"} className="nav-link">
                            Clients
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/addClient"} className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path="/clients" element={<ClientsList/>}/>
                    <Route path="/addClient" element={<AddClient/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;