import css from './SearchFormButton.module.css'

export const SearchFormButton = ({ btnName, onClick }) => {
  return (
    <div>
      <button onClick={onClick} type="button" className={css.SearchFormButton}>
        {btnName}
      </button>
    </div>
  );
};