import css from './SearchForm.module.css'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { SearchFormButton } from 'components/SearchFormButton/SearchFormButton';

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return toast.warning('Oops, no value...');
    }
    onSubmit(inputValue);

    setInputValue('');
  };

  return (
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <input className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="What a you looking for?"
        required
        value={inputValue}
        onChange={handleChange}
      />
      <SearchFormButton btnName="Search" type="submit" >
        Search
      </SearchFormButton>
    </form>
  );
};
export default  SearchForm