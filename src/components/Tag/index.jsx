import './tag.scss';
import PropTypes from 'prop-types';

function Tag({ content }) {
  return <li className="lodging__tag">{content}</li>;
}

Tag.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tag;
