import { useEffect } from 'react';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import aboutPicture from '../../assets/aboutPicture.jpg';
import './about.scss';

function About() {
  const corporateValues = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
    },
    {
      title: 'Service',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  useEffect(() => {
    document.title = `Kasa - A propos`;
  }, []);

  return (
    <div className="about">
      <Banner picture={aboutPicture} />
      <section id="corporate-values">
        {corporateValues.map((value, index) => (
          <Collapse key={index} title={value.title} content={value.content} />
        ))}
      </section>
    </div>
  );
}

export default About;
