import './slideshow.scss';
import { useState } from 'react';
import arrowBackIcon from '../../assets/arrow-back-ios-left.svg';
import arrowForwardIcon from '../../assets/arrow-forward-ios.svg';

function Slideshow(props) {
  const pictures = props.pictures;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextPicture = () => {
    setActiveIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevPicture = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  return (
    <figure className="slideshow">
      <button
        onClick={prevPicture}
        className={`slideshow__navigation slideshow__navigation--prev ${pictures.length < 2 ? 'hidden' : ''}`}
      >
        <img src={arrowBackIcon} alt="" className="slideshow__icon"></img>
      </button>
      <img src={pictures[activeIndex]} alt="" className="slideshow__picture"></img>
      <p className={`slideshow__numbering ${pictures.length < 2 ? 'hidden' : ''}`}>{`${activeIndex + 1}/${
        pictures.length
      }`}</p>
      <button
        onClick={nextPicture}
        className={`slideshow__navigation slideshow__navigation--next ${pictures.length < 2 ? 'hidden' : ''}`}
      >
        <img src={arrowForwardIcon} alt="" className="slideshow__icon"></img>
      </button>
    </figure>
  );
}

export default Slideshow;
