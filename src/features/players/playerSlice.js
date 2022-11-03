import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        nombre: "Carlos",
        correo: "carloscamacho0602@gmail.com",
    },
    {
        id: "2",
        nombre: "Juan",
        correo: "juanperez@gmail.com",
    },
    {
        id: "3",
        nombre: "Lola",
        correo: "lolarodriguez@gmail.com",
    },
    {
        id: "4",
        nombre: "Maria",
        correo: "maria@gmail.com",
    }
]

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addPlayer } = playerSlice.actions;

export default playerSlice.reducer;