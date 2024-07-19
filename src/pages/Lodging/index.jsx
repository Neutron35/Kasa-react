import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import backendData from '../../assets/backend-data.json';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import Collapse from '../../components/Collapse';
import './lodging.scss';
import Rating from '../../components/Rating';

function Lodging() {
  const { lodgingId } = useParams();
  const navigate = useNavigate();
  const [idFound, setIdFound] = useState(false);

  useEffect(() => {
    if (backendData.some((data) => data.id === lodgingId)) {
      setIdFound(true);
    } else {
      setIdFound(false);
      navigate('/notfound', { replace: true });
    }
  }, [lodgingId, idFound, navigate]);

  if (idFound) {
    const lodgingData = backendData.find((data) => data.id === lodgingId);

    return (
      <main className="lodging">
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
              <img src={lodgingData.host.picture} alt="" className="host__picture"></img>
            </div>
            <Rating rate={lodgingData.rating} />
          </div>
          <div className="collapses">
            <Collapse title="Description" content={lodgingData.description} />
            <Collapse title="Équipements" content={lodgingData.equipments} />
          </div>
        </figcaption>
      </main>
    );
  }
}

export default Lodging;
