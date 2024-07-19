import { Link } from 'react-router-dom';
import './notfound.scss';

function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound__code">404</p>
      <p className="notfound__details">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="notfound__homelink">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
