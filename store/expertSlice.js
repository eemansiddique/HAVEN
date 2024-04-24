import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define action type constants
const LOGIN_EXPERT = 'expert/loginExpert'; // Define action type to login expert
const LOGOUT_EXPERT = 'expert/logoutExpert'; // Define action type to logout expert
const SET_EXPERT = 'expert/setExpert'; // Define action type to set logged-in expert

// Async thunk to login expert
export const loginExpert = createAsyncThunk(
    LOGIN_EXPERT,
    async (expertCredentials) => {
        try {
            const response = await axios.post('http://localhost:8000/login/expert', expertCredentials);
            localStorage.setItem('expert', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

// Action creator to logout expert
export const logoutExpert = () => {
    localStorage.removeItem('expert'); // Remove expert data from local storage
    return { type: LOGOUT_EXPERT }; // Return an action object with type LOGOUT_EXPERT
};

// Action creator to set logged-in expert data after login
export const setExpert = (expertData) => {
    return { type: SET_EXPERT, payload: expertData };
};

// Create expert slice
const expertSlice = createSlice({
    name: 'expert',
    initialState: {
        loading: false,
        expert: JSON.parse(localStorage.getItem('expert')) || null, // Initialize expert state from local storage
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginExpert.pending, (state) => {
                state.loading = true;
                state.expert = null;
                state.error = null;
            })
            .addCase(loginExpert.fulfilled, (state, action) => {
                state.loading = false;
                state.expert = action.payload;
                state.error = null;
            })
            .addCase(loginExpert.rejected, (state, action) => {
                state.loading = false;
                state.expert = null;
                if (action.error.response && action.error.response.status === 401) {
                    state.error = "Access denied. Invalid credentials.";
                } else {
                    state.error = action.error.message || "An error occurred.";
                }
            })
            .addCase(LOGOUT_EXPERT, (state) => {
                state.expert = null; // Clear expert data
            })
            .addCase(SET_EXPERT, (state, action) => {
                state.expert = action.payload; // Set expert data after login
            });
    }
});

export default expertSlice.reducer;