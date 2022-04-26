import React from 'react';

import css from './Footer.module.css';
import img from '../../img/title.png'

const Footer = () => {
    return (
        <div className={css.footer}>
            <img src={img} alt=""/>
        </div>
    );
};

export {Footer};