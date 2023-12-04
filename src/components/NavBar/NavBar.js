import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.navbar__container}>
                    <a href="/" className={styles.icon}>
                        <i className="fa fa-tasks"></i>
                    </a>
                    <ul className={styles.navbar__list}>
                        <li>
                            <a href="/">home</a>
                        </li>
                        <li>
                            <a href="/favorite">favorite</a>
                        </li>
                        <li>
                            <a href="/about">about</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;