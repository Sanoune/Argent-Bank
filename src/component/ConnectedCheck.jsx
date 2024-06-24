import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ConnectedCheck() {
  // verifie si il y a toujours le token dans local storage c'est que je suis connecté sinon retour à la page d'acceuil
  const localStorageToken = localStorage.getItem("token");
  return localStorageToken ? <Outlet /> : <Navigate to="/" />;
}

export default ConnectedCheck;
