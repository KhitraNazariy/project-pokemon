import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import css from './Pokemon.module.css';
import {pokemonService} from "../../services/pokemon.service";

const Pokemon = ({pokemon:{name}}) => {

    const [pok, setPok] = useState();

    useEffect(() => {
        pokemonService.getPokemonByName(name).then(value => setPok(value))
    }, [])

    return (
        <Link to={`/pokemon/${name}`} state={pok} className={css.pokemonCard}>

            <div className={css.pokemonCardContent}>
                <div className={css.number}># {pok?.id}</div>
                <div>{pok?.name[0].toUpperCase() + pok?.name.slice(1)}</div>
                <div className={css.types}>{pok?.types.map(type => <div key={type.slot}>{type.type.name}</div>)}</div>
            </div>

            <div>
                <img src={pok?.sprites.front_default} alt={name}/>
            </div>

        </Link>
    );
};

export {Pokemon};