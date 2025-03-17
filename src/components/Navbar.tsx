import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav rubik-doodle-shadow-regular">
      <ul className="nav-list">
        <li className="nav-logo">
          <Link
            to="/"
            className="nav-link"
          >
            Vladosianix
          </Link>
        </li>

        <ul className="nav-links">
          <li className="nav-item">
            <Link
              to="/audio"
              className="nav-link"
            >
              АУДИО КОМПОЗИЦИЯ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
            >
              ОБ ЭТОМ НИГЕРЕ
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;
