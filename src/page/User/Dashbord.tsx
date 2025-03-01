import React from "react";
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-blue-800 text-white p-6 hidden md:block">
                <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>
                <nav>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
                            <FiHome /> Dashboard
                        </li>
                        <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
                            <FiUser /> Profile
                        </li>
                        <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
                            <FiSettings /> Settings
                        </li>
                    </ul>
                </nav>
                <button onClick={handleLogout} className="mt-8 flex items-center gap-2 text-red-400 hover:text-red-600">
                    <FiLogOut /> Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <header className="flex justify-between items-center bg-white shadow p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">Welcome, User</h2>
                    <button onClick={handleLogout} className="text-red-500 hover:text-red-700 flex items-center gap-2">
                        <FiLogOut /> Logout
                    </button>
                </header>

                {/* Dashboard Content */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card Example */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Total Users</h3>
                        <p className="text-2xl font-bold text-blue-600">250</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Active Users</h3>
                        <p className="text-2xl font-bold text-green-600">180</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Pending Requests</h3>
                        <p className="text-2xl font-bold text-red-600">5</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
