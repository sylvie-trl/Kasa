import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src="/logo.svg" alt="Logo" className="header__logo" />
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link--active" : "nav__link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link--active" : "nav__link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
