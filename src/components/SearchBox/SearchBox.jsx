import { useId } from 'react';
import css from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
  const searchFormId = useId();

  return (
    <div className={css['search-form-container']}>
      <label htmlFor={searchFormId}>Find contacts by name</label>
      <input
        className={css['search-form']}
        id={searchFormId}
        type="search"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
