import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './AllPokemonPage.module.css';
import {getAllPokemon} from "../../store";
import {Pokemon} from "../../components";

const AllPokemonPage = () => {

    const {pokemons:{results}} = useSelector(state => state['pokemonReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemon());
    }, [])

    return (
        <div className={css.pokemonWrap}>
            {results && results.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon}/>)}
        </div>
    );
};

export {AllPokemonPage};