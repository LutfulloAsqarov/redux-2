import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const followSlice = createSlice({
    name: "follow",
    initialState: {
        value: JSON.parse(localStorage.getItem("following")) || [],
    },
    reducers: {
        follow(state, action) {
            let index = state.value.findIndex(
                (el) => el.id === action.payload.id
            );
            if (index < 0) {
                state.value = [...state.value, action.payload];
                toast.success(`You follow to ${action.payload.name}`);
            } else {
                state.value = state.value.filter(
                    (user) => user.id !== action.payload.id
                );
                toast.warning(`You un follow from ${action.payload.name}`);
            }
            localStorage.setItem("following", JSON.stringify(state.value));
        },
    },
});

export const { follow } = followSlice.actions;
export default followSlice.reducer;
