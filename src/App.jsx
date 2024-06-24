import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import { profileUser } from "./Store/UserSlice";
import ConnectedCheck from "./component/ConnectedCheck";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Si un token est présent dans localStorage, dispatchez une action pour mettre à jour le profil de l'utilisateur
      dispatch(profileUser(token));
    }
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <Layout>
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />

            {/* Routes protégées */}
            <Route element={<ConnectedCheck />}>
              <Route path="/user" element={<User />} />
            </Route>
          </Routes>
        </Layout>
      </Fragment>
    </Router>
  );
}

export default App;
