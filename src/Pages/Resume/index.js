import React from 'react';
import styles from '../Resume/resume.module.css';
import Curriculo from '../../components/File/Curriculo.pdf';

function Resume() {
  return (
    <div className={styles.Resume}>
      <img className={styles.Curriculo} src="https://i.imgur.com/hPLOLvL.png" alt="Curriculo" />
      <a className={styles.Button} href={Curriculo} download="Curriculo.pdf">
        <span className={styles.Buttonspan}>Download CV</span>
      </a>
    </div>
  );
}

export default Resume;
