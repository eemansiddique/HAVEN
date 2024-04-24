// Define action type constants
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const FETCH_EXPERTS = 'expert/fetchExperts';

// Async thunk to fetch list of experts
export const fetchExperts = createAsyncThunk(
    FETCH_EXPERTS,
    async () => {
        try {
            const response = await axios.get('http://localhost:8000/admin/listExperts'); // Assuming you have an endpoint to fetch experts
            return response.data.allExperts; 
        } catch (error) {
            throw error;
        }
    }
);

// Create expert slice
const listexpertSlice = createSlice({
    name: 'expert',
    initialState: {
        loading: false,
        experts: [], // Ensure experts state is initialized as an empty array
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExperts.pending, (state) => {
                state.loading = true;
                state.experts = [];
                state.error = null;
            })
            .addCase(fetchExperts.fulfilled, (state, action) => {
                state.loading = false;
                state.experts = action.payload;
                state.error = null;
            })
            .addCase(fetchExperts.rejected, (state, action) => {
                state.loading = false;
                state.experts = [];
                state.error = action.error.message || "An error occurred while fetching experts.";
            });
    }
});

export default listexpertSlice.reducer;