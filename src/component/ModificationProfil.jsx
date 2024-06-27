import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "../Store/UserSlice";

export default function ModificationProfil({ onCancelEdit }) {
  const {
    firstName: currentFirstName,
    lastName: currentLastName,
    token,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Utilisation de useState pour gérer les états locaux des champs de saisie
  const [firstName, setFirstName] = useState(currentFirstName || ""); // Utilisation d'une chaîne vide si currentFirstName est null ou undefined
  const [lastName, setLastName] = useState(currentLastName || ""); // Utilisation d'une chaîne vide si currentLastName est null ou undefined

  const handleChangeFirstname = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastname = (event) => {
    setLastName(event.target.value);
  };

  const handleSave = () => {
    dispatch(profileUpdate({ firstName, lastName, token }));
    console.log("Prénom :", firstName);
    console.log("Nom de famille :", lastName);
    onCancelEdit();
  };

  const handleCancel = () => {
    // Réinitialisation des champs avec les valeurs actuelles
    setFirstName(currentFirstName || "");
    setLastName(currentLastName || "");
    onCancelEdit();
  };

  return (
    <div className="flex justify-center items-center gap-6 mb-12">
      <div className="flex flex-col items-end">
        <input
          type="text"
          onChange={handleChangeFirstname}
          value={firstName} // Assurez-vous que firstName est toujours défini, sinon utilisez une chaîne vide
          placeholder="Prénom"
          className="border border-gray-400 px-3 py-2 mb-2 w-40"
        />
        <button
          onClick={handleSave}
          className="border border-gray-400  bg-white w-20 p-2"
        >
          <span>Save</span>
        </button>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          onChange={handleChangeLastname}
          value={lastName} // Assurez-vous que lastName est toujours défini, sinon utilisez une chaîne vide
          placeholder="Nom de famille"
          className="border border-gray-400  px-3 py-2 mb-2 w-40"
        />
        <button
          onClick={handleCancel}
          className="border border-gray-400 bg-white w-20 p-2"
        >
          <span> Cancel</span>
        </button>
      </div>
    </div>
  );
}
