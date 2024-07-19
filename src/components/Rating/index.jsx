import './rating.scss';
import starActive from '../../assets/star-active.svg';
import starInactive from '../../assets/star-inactive.svg';

function Rating({ rate }) {
  const stars = [];
  const maxRating = 5;

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rate) {
      stars.push(1);
    } else {
      stars.push(0);
    }
  }

  return (
    <div className="host__rating">
      {stars.map((star, index) => (
        <img key={index} className="rating__star" src={`${star === 1 ? starActive : starInactive}`} alt=""></img>
      ))}
    </div>
  );
}

export default Rating;