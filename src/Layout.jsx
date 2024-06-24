import { PropTypes } from "prop-types";
import argentBankLogo from "../src/assets/img/argentBankLogo.png";
import Footer from "../src/component/Footer";
import NavBar from "./component/NavBar";
export default function Layout({ children }) {
  return (
    <>
      <NavBar image={argentBankLogo} />
      {children}
      <Footer />
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
