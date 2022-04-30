import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Doughnut} from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";

import css from '../css/PokemonDetails.module.css';

const SearchPokemon = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const {searchPokemon, status, error} = useSelector(state => state['pokemonReducer']);
    // const [errorRequest, setErrorRequest] = useState('');


    const stats = searchPokemon?.stats.map(item => item.stat.name[0].toUpperCase() + item.stat.name.slice(1).replace('-', ' '));

    const baseStat = searchPokemon?.stats.map(item => item.base_stat)

    const data = {
        labels: stats,
        datasets: [
            {
                label: '# of Votes',
                data: baseStat,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            {error && <h2 className={css.error}>There are no Pokemon with this name</h2>}
            {searchPokemon && (
                <div className={css.pokemonDetailsWrap}>
                    <div className={css.titleContent}>
                        <div>
                            <div>
                                <div className={css.types}>{searchPokemon.types.map(type => <div key={type.slot}>{type.type.name.toUpperCase()}</div>)}</div>
                                <div className={css.title}>{searchPokemon.name[0].toUpperCase() + searchPokemon?.name.slice(1)}</div>
                            </div>
                            <div className={css.abilitiesWrap}>
                                <div className={css.abilitiesTitle}>Abilities</div>
                                <div className={css.abilities}>{searchPokemon.abilities.map(item =>
                                    <div key={item.ability.name}>{item.ability.name}</div>)}
                                </div>
                            </div>
                        </div>
                        <div><img src={searchPokemon.sprites.other.dream_world.front_default} alt={searchPokemon.name}/></div>
                    </div>
                    <div className={css.chart}>
                        <Doughnut data={data} />
                    </div>
                </div>
            )}
        </div>
    );
};

export {SearchPokemon};