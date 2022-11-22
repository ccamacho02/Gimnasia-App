import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numero: false
}


export const videoslinks = createSlice({
    name: "video",
    initialState,
    reducers: {
        changeLink: (state) => {
            state.numero = true;
        }
    }
})

export const {changeLink} = videoslinks.actions;

export default videoslinks.reducer;