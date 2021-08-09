import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    selectedUser: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        removeFromList: (state, action) => {
            state.items = state.items.filter(
                (user) => user.id !== action.payload
            );
            if (
                state.selectedUser &&
                state.selectedUser.id === action.payload
            ) {
                state.selectedUser = null;
            }
        },
        setSelectedUser: (state, action) => {
            if (
                state.selectedUser &&
                state.selectedUser.id === action.payload
            ) {
                state.selectedUser = null;
            } else {
                state.selectedUser = state.items.find(
                    (e) => e.id === action.payload
                );
            }
        },
    },
});

export const userActions = usersSlice.actions;
export const userReducer = usersSlice.reducer;
