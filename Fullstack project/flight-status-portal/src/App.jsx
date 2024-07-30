import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/user/:pnr" element={<UserPage />} />
        </Routes>
    </Router>
);

export default App;
