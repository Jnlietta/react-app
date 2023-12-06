import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.navbar__container}>
                    <Link to="/" className={styles.icon}>
                        <i className="fa fa-tasks"></i>
                    </Link>
                    <ul className={styles.list}>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                             to="/">home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                             to="/favorite">favorite</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                             to="/about">about</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;