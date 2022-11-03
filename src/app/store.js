import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../features/players/playerSlice";
import modalsReducer from "../features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        players: playersReducer,
        modal: modalsReducer,
    }
})