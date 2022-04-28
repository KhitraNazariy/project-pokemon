import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getPokemonByName} from "../../store";
import {Pokemon} from "../../components";

const SearchPage = () => {

    const {pokemonByName, searchName:name} = useSelector(state => state['pokemonReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonByName({name}))
    }, [name])

    console.log(pokemonByName)

    return (
        <div>
            {pokemonByName && <Pokemon pokemon={pokemonByName}/>}
        </div>
    );
};

export {SearchPage};