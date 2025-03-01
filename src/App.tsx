import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './redux/store';
import Header from './components/header';
import Footer from './components/footer';
import Home from './page/Home';
import Login from './page/Auth/Login';
import Register from './page/Auth/Register';
import Dashboard from './page/User/Dashbord';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashbord" element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
