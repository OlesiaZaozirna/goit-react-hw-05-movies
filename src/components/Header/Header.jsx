import css from './Header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={css.header_container}>
      <header>
        <nav>
          <NavLink to="/" className={css.navlink}>Home</NavLink>
          <NavLink to="/movies" className={css.navlink}>Movies</NavLink>
        </nav>
      </header>
    </div>
  );
};


export default Header