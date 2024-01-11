import styles from "./Header.module.css"

function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
                <a href="#">Resume</a>
            </nav>
        </header>
    )
}

export default Header;