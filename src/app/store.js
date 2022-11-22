import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../features/players/playerSlice";
import modalsReducer from "../features/modal/modalSlice";
import videoLink from "../features/educativos/videoslink";

export const store = configureStore({
    reducer: {
        players: playersReducer,
        modal: modalsReducer,
        video: videoLink,
    }
})