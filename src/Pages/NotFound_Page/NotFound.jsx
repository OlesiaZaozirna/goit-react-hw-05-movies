import css from './NotFound.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h2>Oops, something went wrong...</h2>
            <Link to="/">Back to home page</Link>
        </>
    )
} 
export default NotFound