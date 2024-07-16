import backendData from '../../assets/backend-data.json';
import homePicture from '../../assets/homePicture.jpg';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './home.scss';

function Home() {
  return (
    <main>
      <Banner picture={homePicture} text={'Chez vous, partout et ailleurs'} />
      <section id="gallery">
        {backendData.map((data) => (
          <Card key={data.id} title={data.title} cover={data.cover} />
        ))}
      </section>
    </main>
  );
}

export default Home;
