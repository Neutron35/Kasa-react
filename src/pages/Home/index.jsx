import picture from '../../assets/landscape.jpg';
import './home.scss';

function Home() {
  return (
    <main>
      <section>
        <img src={picture} alt="" />
        <div>Chez vous, partout et ailleurs</div>
      </section>
    </main>
  );
}

export default Home;
