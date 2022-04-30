import React, {useState} from 'react';
import {GoSearch} from "react-icons/go";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import title from '../../img/title.png'
import css from './SearchPage.module.css';
import {SearchPokemon} from "../SearchPokemon/SearchPokemon";
import {getPokemonByName} from "../../store";

const SearchPage = () => {

    const {reset, register, handleSubmit} = useForm();
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const submit = ({name}) => {
        dispatch(getPokemonByName({name}))
        setName(name)
        reset()
    }


    return (
        <div className={css.wrap}>
            <div className={css.titleImg}><img src={title} alt=""/></div>
            <div className={css.wrapForm}>
                <form className={css.search}>
                    <input className={css.searchTerm}
                           type="text"
                           placeholder="Search pokemon"
                           {...register('name')}
                    />
                    <button className={css.searchButton} onClick={handleSubmit(submit)}>
                        <GoSearch/>
                    </button>
                </form>
            </div>
            {name && <SearchPokemon/>}
        </div>
    );
};

export {SearchPage};