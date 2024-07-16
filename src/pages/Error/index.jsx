import { Link } from 'react-router-dom';
import './error.scss';

function Error() {
  return (
    <main className="error">
      <p className="error__code">404</p>
      <p className="error__details">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error__homelink">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
