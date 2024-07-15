import './banner.scss';

function Banner({ picture, text }) {
  return (
    <section id="banner">
      <img src={picture} alt="" className={text ? 'homePicture' : 'aboutPicture'} />
      <div>{text}</div>
    </section>
  );
}

export default Banner;
