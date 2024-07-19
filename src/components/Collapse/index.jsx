import './collapse.scss';
import { useState } from 'react';
import arrowIcon from '../../assets/arrow-back-ios-up.svg';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="collapse">
      <div className="collapse__title">
        <span>{title}</span>
        <img src={arrowIcon} className="arrow-icon open" alt="" onClick={() => setIsOpen(false)}></img>
      </div>
      <div className="collapse__content collapse__content--opened">
        <p>{content}</p>
      </div>
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse__title">
        <span>{title}</span>
        <img src={arrowIcon} className="arrow-icon" alt="" onClick={() => setIsOpen(true)}></img>
      </div>
      <div className="collapse__content collapse__content--closed">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
