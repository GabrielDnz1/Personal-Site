import styles from "./Header.module.css"

function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">RESUME</a>
            </nav>
        </header>
    )
}

export default Header;