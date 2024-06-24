import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, updateProfile } from "../Store/UserSlice";
import styles from "./Formulaire.module.css";

function Formulaire() {
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      navigate("/user");
    }
  }, [token, navigate]);

  const handleChangeName = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setUserpassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredentials = {
        email: username,
        password: userpassword,
      };
      // Envoyer la requête de connexion et attendre les données utilisateur
      const userData = await dispatch(loginUser(userCredentials));

      // Mettre à jour les données utilisateur dans le store
      dispatch(updateProfile(userData.payload));

      // Mettre à jour les données utilisateur dans le localStorage
      localStorage.setItem("userData", JSON.stringify(userData.payload));

      // Rediriger l'utilisateur vers la page utilisateur
      navigate("/user");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["input-wrapper"]}>
        <label htmlFor="username">Username</label>
        <input
          type="email"
          id="username"
          value={username}
          onChange={handleChangeName}
        />
      </div>
      <div className={styles["input-wrapper"]}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={userpassword}
          onChange={handleChangePassword}
        />
      </div>
      <div className={styles["input-remember"]}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className={styles["sign-in-button"]} type="submit">
        {loading ? "Loading..." : "Login"}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default Formulaire;
