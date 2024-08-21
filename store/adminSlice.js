import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define action type constants
const LOGIN_ADMIN = 'admin/loginAdmin';
const LOGOUT_ADMIN = 'admin/logoutAdmin'; // Define logout action type

// Async thunk to login admin
export const loginAdmin = createAsyncThunk(
    LOGIN_ADMIN,
    async (adminCredentials,{ rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/admin/login', adminCredentials);
            localStorage.setItem('admin', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                return rejectWithValue('Password is incorrect. Please try again.');
            } else {
                return rejectWithValue('An error occurred. Please try again later.');
            }
        }
    }
);
      

// Async thunk to logout admin
export const logoutAdmin = createAsyncThunk(
    LOGOUT_ADMIN,
    async () => {
        // Add your logout logic here, such as clearing local storage
        localStorage.removeItem('admin');
    }
);

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        loading: false,
        admin: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.admin = null;
                state.error = null;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload;
                state.error = null;
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.admin = null;
                if (action.error.response && action.error.response.status === 401) {
                    state.error = "Access denied. Invalid credentials.";
                } else {
                    state.error = action.error.message || "An error occurred.";
                }
            })
            .addCase(logoutAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutAdmin.fulfilled, (state) => {
                state.loading = false;
                state.admin = null;
                state.error = null;
            })
            .addCase(logoutAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred.";
            });
    }
});

export default adminSlice.reducer;

