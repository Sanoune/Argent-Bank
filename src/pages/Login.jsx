import Formulaire from "../component/Formulaire";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className="flex h-[84vh]">
      <div className="flex-1 bg-[#12002b]">
        <section className={styles["sign-in-content"]}>
          <div className="flex flex-col items-center">
            <i className="fa fa-user-circle"></i>
            <h1 className="text-2xl mb-2 mt-2 font-semibold">Sign In</h1>
          </div>
          <Formulaire />
        </section>
      </div>
    </div>
  );
}

export default Login;
