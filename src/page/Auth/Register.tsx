import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/authSlice';
import { RootState, AppDispatch } from '../../redux/store';
import bg_login from "../../assets/images/bg_login.jpg";

function Register() {
    const [formData, setFormData] = useState({ name: '', surname: '', username: '', email: '', password: '' });
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error } = useSelector((state: RootState) => state.auth);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    return (
        <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg_login})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Register</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    {['name', 'surname', 'username', 'email', 'password'].map((field) => (
                        <div key={field} className="mb-4">
                            <label htmlFor={field} className="block text-gray-700 font-semibold mb-2">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <input
                                type={field === 'password' ? 'password' : 'text'}
                                id={field}
                                name={field}
                                required
                                value={formData[field as keyof typeof formData]}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
