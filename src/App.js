import React from 'react';
import {Routes, Route} from "react-router-dom";

import css from './App.module.css';
import {Layout} from "./components";
import {AllPokemonPage, HomePage, PokemonDetailsPage, SearchPage} from "./pages";

const App = () => {
    return (
        <div className={css.appContainer}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'pokemons'} element={<AllPokemonPage/>}/>
                    <Route path={'pokemon/:name'} element={<PokemonDetailsPage/>}/>
                    <Route path={'search'} element={<SearchPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;