import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(
                'https://667fd1db56c2c76b495a36c8.mockapi.io/contacts'
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post(
                "https://667fd1db56c2c76b495a36c8.mockapi.io/contacts",
                contact
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            await axios.delete(
                `https://667fd1db56c2c76b495a36c8.mockapi.io/contacts/${contactId}`
            );
            return contactId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);