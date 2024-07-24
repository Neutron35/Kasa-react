import './collapse.scss';
import { useState } from 'react';
import arrowIcon from '../../assets/arrow-back-ios-up.svg';

function Collapse({ title, content, page }) {
  const [isOpen, setIsOpen] = useState(false);
  const isContentArray = Array.isArray(content);
  return isOpen ? (
    <div className={`collapse collapse--${page}`}>
      <div className={`collapse__title collapse__title--${page}`}>
        <span>{title}</span>
        <img src={arrowIcon} className="arrow-icon open" alt="" onClick={() => setIsOpen(false)}></img>
      </div>
      <div className="collapse__content collapse__content--open">
        <ul>{isContentArray ? content.map((item, index) => <li key={index}>{item}</li>) : <p>{content}</p>}</ul>
      </div>
    </div>
  ) : (
    <div className={`collapse collapse--${page}`}>
      <div className={`collapse__title collapse__title--${page}`}>
        <span>{title}</span>
        <img src={arrowIcon} className="arrow-icon" alt="" onClick={() => setIsOpen(true)}></img>
      </div>
      <div className="collapse__content collapse__content--closed">
        <ul>{isContentArray ? content.map((item, index) => <li key={index}>{item}</li>) : <p>{content}</p>}</ul>
      </div>
    </div>
  );
}

export default Collapse;
