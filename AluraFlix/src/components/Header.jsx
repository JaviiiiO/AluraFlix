import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="encabezado">
      <div className="logo">
        <img src="/Logo.png" />
      </div>
      <div className="botones">
        <Link to="/">
          <button className="active">HOME</button>
        </Link>
        <Link to="/agregar">
          <button className="desactivated">NUEVO VIDEO</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
