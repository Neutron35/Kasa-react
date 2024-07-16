import './card.scss';

function Card({ title, cover }) {
  return (
    <figure>
      <img src={cover} alt={title}></img>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default Card;
