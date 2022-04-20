import React from 'react';
import {Link, NavLink} from "react-router-dom";

import Title from '../../img/title.png';
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.wrap}>
            <div>
                <Link to={'/'}><img className={css.title} src={Title} alt="title png"/></Link>
            </div>
            <div className={css.navWrap}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/pokemons'}>All pokemon</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </div>
        </div>
    );
};

export {Header};