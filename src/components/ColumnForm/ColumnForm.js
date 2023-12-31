import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux.js';

const ColumnForm = ({ listId }) => {
    const [title, setTitle] = useState ('');
    const [icon, setIcon] = useState ('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ listId, title, icon }));        
        setTitle('');
        setIcon('');
    }

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.spanMargin}>Title:</span>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.spanMargin}>Icon:</span>
            <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;
