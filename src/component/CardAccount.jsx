import { PropTypes } from "prop-types";
import styles from "./CardAccount.module.css";

export default function CardAccount({ text, somme, textBalance }) {
  return (
    <section className={styles["account"]}>
      <div className={styles["account-content-wrapper"]}>
        <h3 className={styles["account-title"]}>Argent Bank {text}</h3>
        <p className={styles["account-amount"]}>${somme}</p>
        <p className={styles["account-amount-description"]}>
          {textBalance} Balance
        </p>
      </div>
      <div className={`${styles["account-content-wrapper"]} ${styles.cta}`}>
        <button className={styles["transaction-button"]}>
          View transactions
        </button>
      </div>
    </section>
  );
}

CardAccount.propTypes = {
  somme: PropTypes.string,
  text: PropTypes.string,
};
