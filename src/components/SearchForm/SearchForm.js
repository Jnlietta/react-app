import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getSearchString, updateSearchString } from '../../redux/store.js';

const SearchForm = () => {
    const searchString = useSelector(getSearchString);
    const [string, setString] = useState ('');
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(string));
        setString('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput type="text" value={string} onChange={e => setString(e.target.value)} placeholder={searchString} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;