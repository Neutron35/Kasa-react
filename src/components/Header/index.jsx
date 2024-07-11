import { Link } from 'react-router-dom';
import logo from '../../assets/logo-kasa-red.png';
import './header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
