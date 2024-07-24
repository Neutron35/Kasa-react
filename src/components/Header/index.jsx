import logo from '../../assets/logo-kasa-red.png';
import { NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa" className="header__logo" />
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" activeclassname="active" className="navbar__link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active" className="navbar__link">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
