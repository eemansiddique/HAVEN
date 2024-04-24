// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define action type constants
// const LOGIN_USER = 'user/loginUser';

// export const loginUser = createAsyncThunk(
//     LOGIN_USER,
//     async (userCredentials) => {
//         try {
//             const response = await axios.post('http://localhost:8000/login', userCredentials);
//             localStorage.setItem('user', JSON.stringify(response.data));
//             return response.data;
//         } catch (error) {
//             throw error; // Throw the error to be handled in the rejected case
//         }
//     }
// );

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         loading: false,
//         user: null,
//         error: null
//     },
//     reducers: {
//         // You can define additional reducers here if needed
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.pending, (state) => {
//                 state.loading = true;
//                 state.user = null;
//                 state.error = null;
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload;
//                 state.error = null;
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.user = null;
//                 if (action.error.response && action.error.response.status === 401) {
//                     state.error = "Access denied. Invalid credentials.";
//                 } else {
//                     state.error = action.error.message || "An error occurred.";
//                 }
//             });
//     }
// });

// export default userSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define action type constants
// const LOGIN_USER = 'user/loginUser';
// const LOGOUT_USER = 'user/logoutUser'; // Define logout action type

// // Async thunk to login user
// export const loginUser = createAsyncThunk(
//     LOGIN_USER,
//     async (userCredentials) => {
//         try {
//             const response = await axios.post('http://localhost:8000/login', userCredentials);
//             localStorage.setItem('user', JSON.stringify(response.data));
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }
// );

// // Define logout action creator
// export const logout = () => {
//     localStorage.removeItem('user'); // Remove user data from local storage
//     return { type: LOGOUT_USER }; // Return an action object with type LOGOUT_USER
// };

// // Create user slice
// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         loading: false,
//         user: null,
//         error: null
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.pending, (state) => {
//                 state.loading = true;
//                 state.user = null;
//                 state.error = null;
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload;
//                 state.error = null;
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.user = null;
//                 if (action.error.response && action.error.response.status === 401) {
//                     state.error = "Access denied. Invalid credentials.";
//                 } else {
//                     state.error = action.error.message || "An error occurred.";
//                 }
//             })
//             .addCase(LOGOUT_USER, (state) => {
//                 state.user = null; // Clear user data
//             });
//     }
// });

// export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define action type constants
const LOGIN_USER = 'user/loginUser';
const LOGOUT_USER = 'user/logoutUser'; // Define logout action type
const SET_USER = 'user/setUser'; // Define action type to set user data

// Async thunk to login user
export const loginUser = createAsyncThunk(
    LOGIN_USER,
    async (userCredentials) => {
        try {
            const response = await axios.post('http://localhost:8000/login', userCredentials);
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

// Define logout action creator
export const logout = () => {
    localStorage.removeItem('user'); // Remove user data from local storage
    return { type: LOGOUT_USER }; // Return an action object with type LOGOUT_USER
};

// Action creator to set user data after login
export const setUser = (userData) => {
    return { type: SET_USER, payload: userData };
};

// Create user slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: JSON.parse(localStorage.getItem('user')) || null, // Initialize user state from local storage
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                if (action.error.response && action.error.response.status === 401) {
                    state.error = "Access denied. Invalid credentials.";
                } else {
                    state.error = action.error.message || "An error occurred.";
                }
            })
            .addCase(LOGOUT_USER, (state) => {
                state.user = null; // Clear user data
            })
            .addCase(SET_USER, (state, action) => {
                state.user = action.payload; // Set user data after login
            });
    }
});

export default userSlice.reducer;
