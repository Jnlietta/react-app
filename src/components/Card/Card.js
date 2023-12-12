import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = props => {

    const dispatch = useDispatch();
    console.log('isFavourite', props.isFavorite);

    const addToFav = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };

    const removeClickedCard = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button type="button" className={clsx(props.isFavorite && styles.isFav)} onClick={addToFav}>
                    <i className="fa fa-star-o"></i>
                </button>
                <button type="button" onClick={removeClickedCard}>
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

export default Card;