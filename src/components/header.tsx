import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../logo.svg';

function Header() {
  const navigate = useNavigate();
  
  const { user } = useSelector((state: any) => state.auth);

  const handleAuthButtonClick = () => {
    if (user) {
      navigate('/logout');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center">
          <button onClick={() => navigate('/')}>
            <img src={logo} className="h-16 animate-spin-slow" alt="logo" />
          </button>
          <h1 className="ml-4 text-2xl font-bold">Edicom Maroc</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-300 transition-colors">About</a>
          <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a>
        </nav>

        {/* Login / Logout Button */}
        <button
          onClick={handleAuthButtonClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-transform transform hover:scale-105"
        >
          {user ? 'Logout' : 'Login'}
        </button>
      </div>
    </header>
  );
}

export default Header;
