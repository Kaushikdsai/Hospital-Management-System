import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homescreen from './Components/Homescreen';
import Admin from './Components/Admin';
import Doctor from './Components/Doctor';
import Patient from './Components/Patient';
import ProtectedRoute from './Components/ProtectedRoute';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleAuthentication = (status) => {
        setIsAuthenticated(status);
    }
    const [submittedData, setSubmittedData] = useState([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('submittedData')) || [];
        setSubmittedData(savedData);
    }, []);

    useEffect(() => {
        localStorage.setItem('submittedData', JSON.stringify(submittedData));
    }, [submittedData]);

    return (
        <Router>
            <div>
                <nav className="nav-bar">
                    <ul className="left-nav">
                        <li>HOSPITAL MANAGEMENT SYSTEM</li>
                    </ul>
                    <ul className="right-nav">
                        <li>
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                        <li>
                            <Link to="/doctor" className="nav-link">Doctor</Link>
                        </li>
                        <li>
                            <Link to="/patient" className="nav-link">Patient</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Homescreen handleAuthentication={handleAuthentication}/>} />
                <Route path="/admin" element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Admin submittedData={submittedData} setSubmittedData={setSubmittedData}/></ProtectedRoute>}/>
                <Route path="/doctor" element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Doctor submittedData={submittedData} /></ProtectedRoute>} />
                <Route path="/patient" element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Patient submittedData={submittedData} /></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
