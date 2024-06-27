import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import ConnectedCheck from "./component/ConnectedCheck";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
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
