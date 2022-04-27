import React from 'react';

import css from './HomePage.module.css';
import title from '../../img/title.png';
import background from '../../img/background.png';

const HomePage = () => {
    return (
        <div className={css.wrap}>
            <div className={css.title}><img src={title} alt=""/></div>
            <div><img src={background} alt=""/></div>
        </div>
    );
};

export {HomePage};