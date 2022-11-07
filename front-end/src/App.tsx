import {Link, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import ClientsList from "./components/ClientsList";
import LoginComponent from "./components/LoginComponent";

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
                    {/*#TODO*/}
                    <li className="nav-item">
                        <div className="nav-link">
                            Add
                        </div>
                    </li>
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path="/clients" element={<ClientsList/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;