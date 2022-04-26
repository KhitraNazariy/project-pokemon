import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './AllPokemonPage.module.css';
import {getAllPokemon} from "../../store";
import {Pokemon} from "../../components";

const AllPokemonPage = () => {

    const {pokemons:{results, count}} = useSelector(state => state['pokemonReducer']);

    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);

    const limit = 20;
    const allPages = Math.ceil(count / limit);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemon({limit, offset}));
    }, [offset])

    return (
        <div>
            <div className={css.pokemonWrap}>
                {results && results.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon}/>)}
            </div>
            <div className={css.pagination}>
                <button onClick={() => {

                    if (page <= 1) {
                        return setOffset(offset);
                    }

                    setOffset(offset - 20);
                    setPage(page - 1);

                    document.documentElement.scrollTop = 0;

                }}>prev</button>

                <div className={css.page}>{page}</div>

                <button onClick={() => {

                    if (page >= allPages) {
                        return setOffset(offset);
                    }

                    setOffset(offset + 20);
                    setPage(page + 1);

                    document.documentElement.scrollTop = 0;

                }}>next</button>
            </div>
        </div>
    );
};

export {AllPokemonPage};