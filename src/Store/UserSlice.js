import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, profile, updateUserProfile } from "../service/apiService";

// Thunk asynchrone pour la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Appel à la fonction de connexion de l'API avec l'email et le mot de passe
      const data = await login(email, password);
      const token = data.token;
      // Appel à la fonction de profil de l'API avec le token pour récupérer les données de l'utilisateur
      const user = await profile(token);
      // Création d'un objet contenant à la fois le token et les données de l'utilisateur
      const dataUserAndToken = { token: token, ...user };
      // Retour des données utilisateur et du token
      return dataUserAndToken;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const profileUser = createAsyncThunk(
  "user/profile",
  async (token, { rejectWithValue }) => {
    try {
      // Appel à la fonction de profil de l'API avec le token pour récupérer les données de l'utilisateur
      const user = await profile(token);
      // Création d'un objet contenant à la fois le token et les données de l'utilisateur
      const dataUserAndToken = { token: token, ...user };
      // Retour des données utilisateur et du token
      return dataUserAndToken;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const profileUpdate = createAsyncThunk(
  "user/profileUpdate",
  async ({ firstName, lastName, token }, { rejectWithValue }) => {
    try {
      const user = await updateUserProfile(firstName, lastName, token);
      const dataUserAndToken = { token: token, ...user };

      return dataUserAndToken;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

// Slice du reducer pour gérer les actions liées à l'utilisateur
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: true,
    email: null,
    firstName: null,
    lastName: null,
    token: null,
    error: null,
  },
  reducers: {
    // Action pour réinitialiser toutes les données utilisateur lors de la déconnexion
    clearUserData: (state) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.token = null;
    },
    updateProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      console.log(action.payload.firstName);
      state.lastName = action.payload.lastName;
      console.log(action.payload.lastName);
    },
  },
  extraReducers: (builder) => {
    // Gestion des actions asynchrones de la connexion de l'utilisateur
    builder
      .addMatcher(
        isAnyOf(loginUser.pending, profileUser.pending, profileUpdate.pending),
        (state) => {
          state.loading = true; // Définition de l'état de chargement pendant la requête
          state.error = null; // Réinitialisation de l'erreur à null
        }
      )
      .addMatcher(
        isAnyOf(
          loginUser.fulfilled,
          profileUser.fulfilled,
          profileUpdate.fulfilled
        ),
        (state, action) => {
          // Lorsque la requête est réussie
          state.loading = false; // Fin du chargement
          state.email = action.payload.email; // Mise à jour des données utilisateur dans le store
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.token = action.payload.token;
          state.error = null; // Réinitialisation de l'erreur à null
        }
      )
      .addMatcher(
        isAnyOf(
          loginUser.rejected,
          profileUser.rejected,
          profileUpdate.rejected
        ),
        (state, action) => {
          // En cas d'échec de la requête
          state.loading = false; // Fin du chargement
          state.error = action.payload.message; // Stockage du message d'erreur dans l'état
        }
      );
  },
});

// Export des actions du slice utilisateur
export const { setUserData, clearUserData, updateProfile } = userSlice.actions;

// Export du reducer du slice utilisateur
export default userSlice.reducer;
