import css from './Header.module.css'
import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Loader } from 'components/Loader/Loader'

const Header = () => {
    return (
       <div className={css.header_container}>
      <NavLink to = '/' className={css.navlink}>Home</NavLink> 
        <NavLink to = '/movies' className={css.navlink}>Movies</NavLink> 
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
        </div>
    )
}

export default Header