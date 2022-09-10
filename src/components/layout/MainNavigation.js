import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  let activeClassname = classes.active;
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" className={({isActive})=>isActive?activeClassname:undefined}>All Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" className={({isActive})=>isActive?activeClassname:undefined}>Add a new quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;