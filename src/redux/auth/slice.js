import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const handlePending = (state) => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        error: null,
        loading: false,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, handleRejected)
            .addCase(logIn.pending, handlePending)
            .addCase(logIn.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, handleRejected)
            .addCase(logOut.pending, handlePending)
            .addCase(logOut.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logOut.rejected, handleRejected)
            .addCase(refreshUser.pending, (state) => {
                state.loading = true;
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const authReducer = authSlice.reducer;