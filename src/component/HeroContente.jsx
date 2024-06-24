import styles from "./HeroContente.module.css";

function HeroContente() {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-content"]}>
        <h2 className={styles["sr-only"]}>Promoted Content</h2>
        <p className={styles["subtitle"]}>No fees.</p>
        <p className={styles["subtitle"]}>No minimum deposit.</p>
        <p className={styles["subtitle"]}>High interest rates.</p>
        <p className={`${styles["text"]} mt-3`}>Open a savings account with</p>
        <p className={styles["text"]}>Argent Bank today!</p>
      </div>
    </div>
  );
}
export default HeroContente;
