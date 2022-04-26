import React from 'react';
import {Routes, Route} from "react-router-dom";

import css from './App.module.css';
import {Layout} from "./components";
import {AboutPage, AllPokemonPage, HomePage, SearchPage} from "./pages";

const App = () => {
    return (
        <div className={css.appContainer}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/pokemons'} element={<AllPokemonPage/>}/>
                    <Route path={'/search'} element={<SearchPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;