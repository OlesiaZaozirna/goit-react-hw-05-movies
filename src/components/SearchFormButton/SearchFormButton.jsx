import css from './SearchFormButton.module.css'

export const SearchFormButton = ({ btnName, onClick }) => {
  return (
       <button  type="submit" className={css.SearchFormButton}>
        {btnName}
      </button>
     );
};