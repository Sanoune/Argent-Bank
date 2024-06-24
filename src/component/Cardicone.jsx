import { PropTypes } from "prop-types";
import styles from "./Cardicone.module.css";
function Cardicone({ image, title, text }) {
  return (
    <div className={styles["feature-item"]}>
      <img src={image} alt="Icon" className={styles["feature-icon"]} />
      <h3 className={styles["feature-item-title"]}>{title}</h3>
      <p className={styles["feature-item-text"]}>{text}</p>
    </div>
  );
}
Cardicone.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default Cardicone;
