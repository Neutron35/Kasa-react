import './slideshow.scss';
import PropTypes from 'prop-types';
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
      {pictures.length > 2 && (
        <div>
          <button onClick={prevPicture} className={`slideshow__navigation slideshow__navigation--prev`}>
            <img src={arrowBackIcon} alt="" className="slideshow__icon"></img>
          </button>
          <p className={`slideshow__numbering`}>{`${activeIndex + 1}/${pictures.length}`}</p>
          <button onClick={nextPicture} className={`slideshow__navigation slideshow__navigation--next`}>
            <img src={arrowForwardIcon} alt="" className="slideshow__icon"></img>
          </button>
        </div>
      )}
      <img src={pictures[activeIndex]} alt="" className="slideshow__picture"></img>
    </figure>
  );
}

Slideshow.propTypes = {
  props: PropTypes.array.isRequired,
};

export default Slideshow;
