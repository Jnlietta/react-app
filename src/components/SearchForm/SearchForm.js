import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
    const [string, setString] = useState ('');
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: string });
        setString('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput type="text" value={string} onChange={e => setString(e.target.value)} placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;