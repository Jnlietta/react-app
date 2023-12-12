import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = props => {

    const dispatch = useDispatch();
    console.log('isFavourite', props.isFavorite);

    const onClick = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            <button type="button" className={clsx(props.isFavorite && styles.isFav)} onClick={onClick}>
                <i className="fa fa-star-o"></i>
            </button>
        </li>
    );
};

export default Card;