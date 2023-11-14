import styles from './Card.module.scss';

const Card = props => {
    return (
            <ul className={styles.cards}>
                {props.cards.map(card => <li key={card.id}>{card.title}</li>)}
            </ul>
    );
};

export default Card;