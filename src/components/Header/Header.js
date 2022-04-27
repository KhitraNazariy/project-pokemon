import React from 'react';
import {Link, NavLink} from "react-router-dom";

import Title from '../../img/title.png';
import css from './Header.module.css';
import {useTheme} from "../../hooks";

const Header = () => {

    const {theme, setTheme} = useTheme();

    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    const handleLightThemeClick = () => {
        setTheme('light')
    }

    return (
        <div className={css.wrap}>
            <div>
                <Link to={'/pokemons'}><img className={css.title} src={Title} alt="title png"/></Link>
            </div>
            <div className={css.headerWrap}>
                <div className={css.nav}>
                    <NavLink to={'/pokemons'}>All pokemon</NavLink>
                    <NavLink to={'/search'}>Search</NavLink>
                </div>
                <div className={css.navBtn}>
                    <button className={css.lightBtn} onClick={handleLightThemeClick}>Light</button>
                    <button className={css.darkBtn} onClick={handleDarkThemeClick}>Dark</button>
                </div>
            </div>
        </div>
    );
};

export {Header};