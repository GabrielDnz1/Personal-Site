import styles from "../About/about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.About}>
      <img src="https://media.licdn.com/dms/image/D4D03AQEjJGCwlHuLhw/profile-displayphoto-shrink_200_200/0/1702517985715?e=1710979200&v=beta&t=cOP1Y4lerwwmEzwcoKSjgx9RQKatkakOTWydYq44GCg"/>
        <div className={styles.description}>
          I am a 19-year-old Brazilian student pursuing a degree <br></br>
          in Computer Engineering at the Federal University of Paraíba.<br></br>
          Currently, I am in the 4th semester of my program.
        </div>
        <div className={styles.socialsites}>
          <a href='https://github.com/GabrielDnz1'>
            <img src="https://i.imgur.com/6yOXJjN.png" alt="" width={"50px"}/>
          </a>
          <a href='https://www.linkedin.com/in/gabrieldnzz/'>
            <img src="https://i.imgur.com/RwvHQgq.png" alt="" width={"50px"}/>
          </a>
          <a href='mailto:gabrielbarbosa1315@gmail.com'>
            <img src="https://i.imgur.com/yzsccVL.png" alt="" width={"50px"}/>
          </a>
        </div>
        <div className={styles.techstack}>TECH STACK</div>
        <div className={styles.Icons}>
          <img src='https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256' width={"100px"} alt="JavaScript" />
          <img src='https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256' width={"100px"} alt="CSS" />
          <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/html-2752158-2284975.png?f=webp&w=256' width={"100px"} alt="HTML" />
          <img src='https://cdn.iconscout.com/icon/free/png-512/free-c-58-1175247.png?f=webp&w=256' width={"100px"} alt="C" />
          <img src='https://cdn.iconscout.com/icon/free/png-512/free-c-4-226082.png?f=webp&w=256' width={"100px"} alt="C++" />
          <img src='https://cdn.iconscout.com/icon/free/png-512/free-react-4-1175110.png?f=webp&w=256' width={"100px"} alt="React" />
        </div>
      </div>
    </div>
  );
}

export default About;
