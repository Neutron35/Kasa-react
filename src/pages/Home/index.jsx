import backendData from '../../assets/backend-data.json';
import homePicture from '../../assets/homePicture.jpg';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './home.scss';

function Home() {
  return (
    <div className="home">
      <Banner picture={homePicture} text="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {backendData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </section>
    </div>
  );
}

export default Home;
