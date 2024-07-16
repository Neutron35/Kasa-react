import { Link } from 'react-router-dom';
import './card.scss';

function Card({ title, cover, data }) {
  const path = `/lodging/${data.id}`;
  return (
    <Link to={path}>
      <figure className="card">
        <img src={cover} alt={title} className="card__cover"></img>
        <figcaption className="card__title">{title}</figcaption>
      </figure>
    </Link>
  );
}

export default Card;
