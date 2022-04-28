import React from 'react';
import { GoSearch } from "react-icons/go";

import css from './Search.module.css';

const Search = () => {
    return (
        <div className={css.wrapForm}>
            <form className={css.search}>
                <input className={css.searchTerm} type="text" placeholder="Search pokemon"/>
                <button className={css.searchButton}><GoSearch/></button>
            </form>
        </div>
    );
};

export {Search};