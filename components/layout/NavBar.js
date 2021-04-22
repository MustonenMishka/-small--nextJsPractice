import Link from "next/link";
import styles from './NavBar.module.scss';
import Logo from "./Logo";

const NavBar = props => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact">Contact me</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;