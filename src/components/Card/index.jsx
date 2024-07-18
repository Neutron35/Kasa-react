import { Link } from 'react-router-dom';
import './card.scss';

function Card({ data }) {
  return (
    <Link to={`/lodging/${data.id}`}>
      <figure className="card">
        <img src={data.cover} alt={data.title} className="card__cover"></img>
        <figcaption className="card__title">{data.title}</figcaption>
      </figure>
    </Link>
  );
}

export default Card;
