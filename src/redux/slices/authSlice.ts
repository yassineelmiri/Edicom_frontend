import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

interface AuthState {
    user: any;
    loading: boolean;
    token: string | null;
    error: string | null;
}

let storedUser = null;
try {
    const user = localStorage.getItem('user');
    if (user) {
        storedUser = JSON.parse(user);
    }
} catch (error) {
    console.error('Failed to parse user from localStorage:', error);
    localStorage.removeItem('user');
}

const initialState: AuthState = {
    user: storedUser,
    loading: false,
    token: localStorage.getItem('token') || null,
    error: null,
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData: { name: string; surname: string; username: string; email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/api/user', userData);
            toast.success('Registration successful!');
            return response.data;
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Registration failed');
            return rejectWithValue(error.response?.data?.message || 'Registration failed');
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials: { username: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', credentials);
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data.token));
            } else {
                console.error('No user data found in response');
            }

            localStorage.setItem('token', response.data.token);
            toast.success('Login successful!');
            
            return response.data;
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Login failed');
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;