import css from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </ul>
    )
}

export default Header