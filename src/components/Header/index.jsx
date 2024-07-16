import logo from '../../assets/logo-kasa-red.png';
import { NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa" />
      <nav className="navbar">
        <NavLink to="/" activeclassname="active" className="navbar__link">
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="active" className="navbar__link">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
