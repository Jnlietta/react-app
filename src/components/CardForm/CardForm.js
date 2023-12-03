import styles from './CardForm.module.scss'
import { useState } from 'react';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';

const CardForm = ({columnId}) => {
    const [title, setTitle] = useState ('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { columnId , title } });
        setTitle('');
    }

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;