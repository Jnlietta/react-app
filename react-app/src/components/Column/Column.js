import styles from './Column.module.scss';
import Card from '../Card/Card.js';

const Column = props => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
            <Card cards={props.cards} />
        </article>
    );
};

export default Column;