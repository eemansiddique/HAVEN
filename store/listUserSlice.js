import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define action type constants
const FETCH_USERS_LIST = 'listUser/fetchUsersList';

// Async thunk to fetch the list of all users
export const fetchUsersList = createAsyncThunk(
    FETCH_USERS_LIST,
    async () => {
        try {
            const response = await axios.get('http://localhost:8000/admin/users'); // Replace with your API endpoint for fetching all users
            return response.data.allUsers;
        } catch (error) {
            throw error; // Throw the error to be handled in the rejected case
        }
    }
);

const listUserSlice = createSlice({
    name: 'listUser',
    initialState: {
        loading: false,
        users: [],
        error: null
    },
    reducers: {
        // You can define additional reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsersList.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsersList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred while fetching users list.";
            });
    }
});

export default listUserSlice.reducer;