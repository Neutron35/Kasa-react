import './thumbnail.scss';

function Thumbnail(props) {
  const title = props.title;
  const cover = props.cover;
  return (
    <figure>
      <img src={cover} alt={title}></img>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default Thumbnail;
