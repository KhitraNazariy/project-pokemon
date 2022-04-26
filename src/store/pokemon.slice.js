import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../services/pokemon.service";

const initialState = {
    pokemons: [],
    status: null,
    error: null
}

export const getAllPokemon = createAsyncThunk(
    'pokemonSlice/getAllPokemon',
    async ({offset}, {rejectWithValue}) => {
        try {
            return await pokemonService.getAll(offset);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    extraReducers: {
        [getAllPokemon.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllPokemon.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.pokemons = action.payload
        },
        [getAllPokemon.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
});

const pokemonReducer = pokemonSlice.reducer;

export default pokemonReducer;