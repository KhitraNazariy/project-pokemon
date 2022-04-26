import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const PokemonDetailsPage = () => {

    const name = useParams();

    const {state:pokemon} = useLocation();

    return (
        <div>
            PokemonDetailsPage
        </div>
    );
};

export {PokemonDetailsPage};