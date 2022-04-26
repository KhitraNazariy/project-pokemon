import {configureStore} from "@reduxjs/toolkit";

import pokemonReducer from "./pokemon.slice";

const store = configureStore({
    reducer: {
        pokemonReducer
    }
})

export default store;