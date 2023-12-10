import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {

    const cards = useSelector(state => getFavoriteCards(state));

    return(
        <div className={styles.hero}>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} {...card} />)}
                </ul>
            </article>
        </div>
    );
};

export default Favorite;