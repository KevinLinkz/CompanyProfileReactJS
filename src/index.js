import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/AdminPage/LoginPage';
import AdminPage from './pages/AdminPage/AdminPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// carousel https://swiperjs.com



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/CompanyProfileReactJS" element={<HomePage />} />
        <Route path="/administrator/dashboard" element={<AdminPage />} />
        <Route path="/administrator/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} status={404} />
      </Routes>
    </Router>

  </React.StrictMode >
);

function NotFound() {
  return <h1>404 Not Found</h1>;
} 
