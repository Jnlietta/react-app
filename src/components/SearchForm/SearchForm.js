import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString, updateSearchString } from '../../redux/store.js';

const SearchForm = () => {
    const searchString = useSelector(getSearchString);
    
    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        dispatch(updateSearchString(e.target.value));
    };

    return (
        <form className={styles.searchForm}>
            <TextInput type="text" value={searchString} onChange={handleChange} placeholder="Search..." />
        </form>
    );
  };

  export default SearchForm;