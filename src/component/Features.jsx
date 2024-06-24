import iconChat from "../assets/img/iconChat.png";
import iconMoney from "../assets/img/iconMoney.png";
import iconSecurity from "../assets/img/iconSecurity.png";
import Cardicone from "./Cardicone";
import styles from "./Features.module.css";
function Features() {
  return (
    <div className={styles["features"]}>
      <Cardicone
        image={iconChat}
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Cardicone
        image={iconMoney}
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <Cardicone
        image={iconSecurity}
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      />
    </div>
  );
}

export default Features;
