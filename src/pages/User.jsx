import { useSelector } from "react-redux";
import CardAccount from "../component/CardAccount";

import { useState } from "react";
import ModificationProfil from "../component/ModificationProfil";
import styles from "./User.module.css";

function User() {
  const { loading, error, firstName, lastName } = useSelector(
    (state) => state.user
  );
  // Créer un état local pour gérer l'affichage du composant ModificationProfil
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle l'état isEditing
  };

  // Fonction pour gérer l'annulation de la modification
  const handleCancelEdit = () => {
    setIsEditing(false); // Passer isEditing à false pour réafficher le bouton "Edit Name"
  };

  return (
    <div className="flex">
      <div className="flex-1 bg-[#12002b]">
        <div className="flex flex-col items-center mt-12">
          <h1 className="text-white text-3xl mb-3">Welcome back</h1>
        </div>
        {isEditing ? (
          <ModificationProfil onCancelEdit={handleCancelEdit} />
        ) : (
          <div>
            <p className="text-white text-3xl flex justify-center">
              {firstName} {lastName}
            </p>
            <div className=" flex flex-col items-center m-6">
              <button
                onClick={handleEditClick}
                className={styles["edit-button"]}
              >
                Edit Name
              </button>
            </div>
          </div>
        )}{" "}
        <CardAccount
          somme="2,082.79"
          text="Checking (x8349)"
          textBalance="Available"
        />
        <CardAccount
          somme="10,928.42"
          text="Savings (x6712)"
          textBalance="Available"
        />
        <CardAccount
          somme="184.30"
          text="Credit Card (x8349)"
          textBalance="Current"
        />
      </div>
    </div>
  );
}

export default User;
