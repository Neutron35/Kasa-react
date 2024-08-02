import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';
import backendData from '../../assets/backend-data.json';
import './lodging.scss';

function Lodging() {
  const { lodgingId } = useParams();
  const navigate = useNavigate();
  const [idFound, setIdFound] = useState(false);

  const lodgingData = backendData.find((data) => data.id === lodgingId);

  useEffect(() => {
    if (lodgingData !== undefined) {
      setIdFound(true);
    } else {
      setIdFound(false);
      navigate('/notfound', { replace: true });
    }
  }, [lodgingData, idFound, navigate]);

  useEffect(() => {
    document.title = `${lodgingData.title} - ${lodgingData.location}`;
  }, [lodgingData]);

  if (idFound) {
    return (
      <div className="lodging">
        <Slideshow pictures={lodgingData.pictures} />
        <figcaption>
          <div className="lodging__info">
            <h2 className="lodging__title">{lodgingData.title}</h2>
            <h3 className="lodging__location">{lodgingData.location}</h3>
            <ul className="lodging__tags">
              {lodgingData.tags.map((tag, index) => (
                <Tag key={index} content={tag} />
              ))}
            </ul>
          </div>
          <div className="host__info">
            <div className="host__identity">
              <p className="host__name">{lodgingData.host.name}</p>
              <img
                src={lodgingData.host.picture}
                alt={`Portrait de ${lodgingData.host.name}`}
                className="host__picture"
              ></img>
            </div>
            <Rating rate={lodgingData.rating} />
          </div>
          <div className="collapses">
            <Collapse title="Description" content={lodgingData.description} />
            <Collapse title="Équipements" content={lodgingData.equipments} />
          </div>
        </figcaption>
      </div>
    );
  }
}

export default Lodging;
