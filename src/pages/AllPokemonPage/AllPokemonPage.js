import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './AllPokemonPage.module.css';
import {getAllPokemon} from "../../store";
import {Pokemon} from "../../components";

const AllPokemonPage = () => {

    const {pokemons:{results}} = useSelector(state => state['pokemonReducer']);

    const [offset, setOffset] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemon({offset}));
    }, [offset])

    return (
        <div>
            <div className={css.pokemonWrap}>
                {results && results.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon}/>)}
            </div>
            <div>
                <button onClick={() => {
                    setOffset(offset - 20)
                }}>prev</button>
                <button onClick={() => {
                    setOffset(offset + 20)
                }}>next</button>
            </div>
        </div>
    );
};

export {AllPokemonPage};