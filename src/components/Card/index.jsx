import './card.scss';

function Card({ title, cover }) {
  return (
    <figure className="card">
      <img src={cover} alt={title} className="card__cover"></img>
      <figcaption className="card__title">{title}</figcaption>
    </figure>
  );
}

export default Card;
