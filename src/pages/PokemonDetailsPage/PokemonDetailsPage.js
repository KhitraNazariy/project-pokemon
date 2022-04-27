import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import css from './PokemonDetailsPage.module.css';

const PokemonDetailsPage = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const name = useParams();

    const {state:pokemon} = useLocation();

    const stats = pokemon.stats.map(item => item.stat.name[0].toUpperCase() + item.stat.name.slice(1).replace('-', ' '));

    const baseStat = pokemon.stats.map(item => item.base_stat)

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
        <div className={css.pokemonDetailsWrap}>
            <div className={css.titleContent}>
                <div>
                    <div>
                        <div className={css.types}>{pokemon.types.map(type => <div key={type.slot}>{type.type.name.toUpperCase()}</div>)}</div>
                        <div className={css.title}>{pokemon.name[0].toUpperCase() + pokemon?.name.slice(1)}</div>
                    </div>
                    <div className={css.abilitiesWrap}>
                        <div className={css.abilitiesTitle}>Abilities</div>
                        <div className={css.abilities}>{pokemon.abilities.map(item =>
                            <div key={item.ability.name}>{item.ability.name}</div>)}
                        </div>
                    </div>
                </div>
                <div><img src={pokemon.sprites.other.dream_world.front_default} alt={name}/></div>
            </div>
            <div className={css.chart}>
                <Doughnut data={data} />
            </div>
        </div>
    );
};

export {PokemonDetailsPage};