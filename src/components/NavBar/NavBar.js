import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';


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
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/favorite">favorite</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;