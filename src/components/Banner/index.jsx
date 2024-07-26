import './banner.scss';
import PropTypes from 'prop-types';

function Banner({ picture, text }) {
  return (
    <section className="banner">
      <img
        src={picture}
        alt=""
        className={`banner__picture ${text ? 'banner__picture--text' : 'banner__picture--notext'}`}
      />
      <div className="banner__text">{text}</div>
    </section>
  );
}

Banner.propTypes = {
  picture: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;
