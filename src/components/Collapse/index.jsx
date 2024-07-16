import './collapse.scss';
import { useState } from 'react';
import arrowIcon from '../../assets/arrow-back-ios.svg';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="dropdown">
      <div className="dropdown-title">
        <span>{title}</span>
        <img src={arrowIcon} className="arrow-icon open" alt="" onClick={() => setIsOpen(false)}></img>
      </div>
      <div className="dropdown-content open">
        <p>{content}</p>
      </div>
    </div>
  ) : (
    <div className="dropdown">
      <div className="dropdown-title">
        <span>{title}</span>
        <img src={arrowIcon} className="arrow-icon" alt="" onClick={() => setIsOpen(true)}></img>
      </div>
      <div className="dropdown-content closed">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
