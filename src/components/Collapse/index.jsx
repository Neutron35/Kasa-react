import './collapse.scss';
import { useState } from 'react';
import arrowIcon from '../../assets/arrow-back-ios-up.svg';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const isContentArray = Array.isArray(content);

  return (
    <div className="collapse">
      <div className="collapse__title">
        <span>{title}</span>
        <img
          src={arrowIcon}
          className={`arrow-icon ${isOpen ? 'open' : ''}`}
          alt=""
          onClick={() => setIsOpen(!isOpen)}
        ></img>
      </div>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : 'collapse__content--closed'}`}>
        <ul>{isContentArray ? content.map((item, index) => <li key={index}>{item}</li>) : <p>{content}</p>}</ul>
      </div>
    </div>
  );
}

export default Collapse;
