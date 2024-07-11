import logo from '../../assets/logo-kasa-white.png';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
