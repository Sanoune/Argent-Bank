import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUserData } from "../Store/UserSlice";

function NavBar({ image }) {
  const { loading, error, firstName, lastName, token } = useSelector(
    (state) => state.user
  );

  // Utilisez useDispatch pour obtenir la fonction de dispatch Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUserData());
    localStorage.clear();
    // Dispatch une action pour déconnecter l'utilisateur (si nécessaire)
    navigate("/");
  };
  return (
    <div className=" flex-col md:flex-row flex justify-between px-5 py-1 items-center">
      <img className="w-52 max-w-full" alt="logo" src={image}></img>

      {token ? (
        <div className="flex items-center gap-5">
          <div className="flex gap-1 ">
            {" "}
            <i className="fa fa-user-circle content-center"></i>{" "}
            <div>{firstName} </div>
          </div>

          <button
            className="flex font-semibold items-center gap-2"
            onClick={handleLogout}
          >
            <i className="fa fa-sign-out"></i>
            <p>Sign Out</p>
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          relative="path"
          className="flex font-semibold items-center gap-2"
        >
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </Link>
      )}
    </div>
  );
}

NavBar.propTypes = {
  image: PropTypes.string,
};

export default NavBar;
