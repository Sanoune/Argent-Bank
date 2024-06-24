import axios from "axios";

export async function login(email, password) {
  const response = await axios.post(`http://localhost:3001/api/v1/user/login`, {
    email: email,
    password: password,
  });
  return response.data.body;
}

export async function profile(token) {
  const response = await axios.post(
    `http://localhost:3001/api/v1/user/profile`,
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data.body;
}

export async function updateUserProfile(firstName, lastName, token) {
  try {
    const response = await axios.put(
      `http://localhost:3001/api/v1/user/profile`,
      {
        firstName: firstName,
        lastName: lastName,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    // Gestion des erreurs
    if (error.response) {
      // Erreur de réponse HTTP (statut non-200)
      console.error("Erreur de réponse HTTP:", error.response.status);
    } else if (error.request) {
      // Erreur de requête (pas de réponse reçue)
      console.error("Erreur de requête:", error.request);
    } else {
      // Erreur pendant la requête (autre erreur)
      console.error("Erreur pendant la requête:", error.message);
    }
    // Retourner null ou jeter l'erreur pour que le composant appelant puisse la gérer
    throw error;
  }
}
