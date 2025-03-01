import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ProtectedRoute = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
  
    return user || storedUser ? <Outlet /> : <Navigate to="/login" replace />;
  };
  

export default ProtectedRoute;
