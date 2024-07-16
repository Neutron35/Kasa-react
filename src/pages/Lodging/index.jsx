import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import backendData from '../../assets/backend-data.json';

function Lodging() {
  const { lodgingId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const idFound = backendData.some((data) => data.id === lodgingId);
    if (!idFound) {
      navigate('/notfound', { replace: true });
    }
  }, [lodgingId, navigate]);

  return <div>Fiche logement {lodgingId}</div>;
}

export default Lodging;
