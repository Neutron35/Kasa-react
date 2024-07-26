import PropTypes from 'prop-types';
import './tag.scss';

function Tag({ content }) {
  return <li className="lodging__tag">{content}</li>;
}

Tag.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tag;
