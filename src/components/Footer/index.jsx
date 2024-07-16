import logo from '../../assets/logo-kasa-white.png';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer__logo" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
