import styles from './Card.module.scss';

const Card = props => {
    return (
        <li className={styles.card}>
            {props.title}
            <button type="button">
                <i className="fa fa-star-o"></i>
            </button>
        </li>
    );
};

export default Card;