import {Link, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import ClientsList from "./components/ClientsList";

const App: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/clients"} className="nav-link">
                            Clients
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<ClientsList/>}/>
                    <Route path="/clients" element={<ClientsList/>}/>
                    {/*<Route path="/add" element={<AddTutorial/>} />
                    <Route path="/tutorials/:id" element={<Tutorial/>} />*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;