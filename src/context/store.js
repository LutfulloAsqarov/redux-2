import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import followSlice from "./followSlice";

export const store = configureStore({
    reducer: {
        users: userSlice,
        follow: followSlice,
    },
});
