import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './AllPokemonPage.module.css';
import {getAllPokemon} from "../../store";
import {Loader, Pokemon} from "../../components";

const AllPokemonPage = () => {

    const {pokemons: {results, count}, error, status} = useSelector(state => state['pokemonReducer']);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const limit = 21;
    const allPages = Math.ceil(count / limit);

    useEffect(() => {
        dispatch(getAllPokemon({limit, offset}));
    }, [offset])

    if (status === 'pending') {
        return <Loader/>
    }

    return (
        <div>
            {error && <h2 className={css.error}>Oops page is temporarily unavailable</h2>}
            <div className={css.pokemonWrap}>
                {results && results.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon}/>)}
            </div>
            <div className={css.pagination}>
                <button onClick={() => {

                    if (page <= 1) {
                        return setOffset(offset);
                    }

                    setOffset(offset - 21);
                    setPage(page - 1);

                    document.documentElement.scrollTop = 0;

                }}>prev
                </button>

                <div className={css.page}>{page}</div>

                <button onClick={() => {

                    if (page >= allPages) {
                        return setOffset(offset);
                    }

                    setOffset(offset + 21);
                    setPage(page + 1);

                    document.documentElement.scrollTop = 0;

                }}>next
                </button>
            </div>
        </div>
    );
};

export {AllPokemonPage};