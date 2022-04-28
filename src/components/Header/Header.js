import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { GoSearch } from "react-icons/go";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import Title from '../../img/title.png';
import css from './Header.module.css';
import {useTheme} from "../../hooks";
import {addSearchName} from "../../store";

const Header = () => {

    const {register,handleSubmit,reset} = useForm();

    const dispatch = useDispatch();

    const {theme, setTheme} = useTheme();

    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    const handleLightThemeClick = () => {
        setTheme('light')
    }

    const submit = (name) => {
        dispatch(addSearchName(name))
        reset()
    }

    return (
        <div className={css.wrap}>
            <div>
                <Link to={'/pokemons'}><img className={css.title} src={Title} alt="title png"/></Link>
            </div>
            <div className={css.headerWrap}>
                <div className={css.nav}>
                    <NavLink to={'/pokemons'}>All pokemon</NavLink>

                    <div className={css.wrapForm}>
                        <form className={css.search}>
                            <input className={css.searchTerm}
                                   type="text"
                                   placeholder="Search pokemon"
                                   {...register('name')}/>
                            <button className={css.searchButton} onClick={handleSubmit(submit)}>
                                <Link to={'search'}><GoSearch/></Link>
                            </button>
                        </form>
                    </div>

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