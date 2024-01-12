import styles from "../Home/home.module.css"
function Home(){
    return(
    <div className={styles.Profile}>
        <div className={styles.Introduction}>Hi, my name is</div>
        <div className={styles.Name}>GABRIEL BARBOSA.</div>
        <div className={styles.Description}>I'm a undergraduate computer engineering at UFPB</div>
    </div> 
    )
}

export default Home;