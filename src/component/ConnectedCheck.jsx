import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { profileUser } from "../Store/UserSlice";

function ConnectedCheck() {
  // verifie si il y a toujours le token dans local storage c'est que je suis connecté sinon retour à la page d'acceuil
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.user);
  useEffect(() => {
    const localStoragToken = localStorage.getItem("token");
    // recuperer profil avec token dans localStorage
    dispatch(profileUser(localStoragToken));
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    //si error retourne
    return token ? <Outlet /> : <Navigate to="/" />;
  }
}

export default ConnectedCheck;
