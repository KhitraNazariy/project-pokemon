import React, {useEffect, useState} from 'react';

import css from './Pokemon.module.css';
import {pokemonService} from "../../services/pokemon.service";

const Pokemon = ({pokemon:{name}}) => {

    const [pok, setPok] = useState();

    useEffect(() => {
        pokemonService.getPokemonByName(name).then(value => setPok(value))
    }, [])

    console.log(pok)

    return (
        <div className={css.pokemonCard}>
            <div className={css.pokemonImgBackground}><img src={pok?.sprites.front_default} alt={name}/></div>
            <div>{pok?.name}</div>
        </div>
    );
};

export {Pokemon};