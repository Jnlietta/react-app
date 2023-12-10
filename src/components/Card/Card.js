import { useState } from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = props => {

    const [isFavorite, setIsFavorite] = useState(props.isFavorite);

    console.log('isfav', isFavorite);

    return (
        <li className={styles.card}>
            {props.title}
            <button type="button" className={clsx(isFavorite && styles.isFav)} >
                <i className="fa fa-star-o"></i>
            </button>
        </li>
    );
};

export default Card;