import styles from "./ProfileMenu.module.css"

function ProfileMenu(){
    return(
        <div className={styles.ProfileMenu}>
            <div className={styles.circle}></div>
            <div className={styles.name}>Gabriel Barbosa</div>
        </div>
    )
}

export default ProfileMenu;