import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {pokemonService} from "../services/pokemon.service";

const initialState = {
    pokemons: [],
    searchPokemon: null,
    status: null,
    error: null
}

export const getAllPokemon = createAsyncThunk(
    'pokemonSlice/getAllPokemon',
    async ({limit, offset}, {rejectWithValue}) => {
        try {
            return await pokemonService.getAll(limit, offset);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getPokemonByName = createAsyncThunk(
    'pokemonSlice/getPokemonByName',
    async ({name}, {rejectWithValue}) => {
        try {
            return await pokemonService.getPokemonByName(name)
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {
        addSearchName: (state, action) => {
            state.searchName = action.payload.name
        }
    },
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
        },


        [getPokemonByName.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getPokemonByName.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.searchPokemon = action.payload
        },
        [getPokemonByName.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }

    }
});

const pokemonReducer = pokemonSlice.reducer;

export const {addSearchName} = pokemonSlice.actions;

export default pokemonReducer;