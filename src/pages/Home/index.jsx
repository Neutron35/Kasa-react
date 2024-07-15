import datas from '../../assets/data.json';
import homePicture from '../../assets/homePicture.jpg';
import Banner from '../../components/Banner';
import Thumbnail from '../../components/Thumbnail';
import './home.scss';

function Home() {
  return (
    <main>
      <Banner picture={homePicture} text={'Chez vous, partout et ailleurs'} />
      <section id="gallery">
        {datas.map((data) => (
          <Thumbnail key={data.id} title={data.title} cover={data.cover} />
        ))}
      </section>
    </main>
  );
}

export default Home;
