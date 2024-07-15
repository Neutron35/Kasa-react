import logo from '../../assets/logo-kasa-red.png';
import { NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa" />
      <nav>
        <NavLink to="/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
