import PhotoGallery from './PhotoGallery';
import './App.css';
import Icon from '@mui/material/Icon';

function App() {

  const images = [
    "/images/1 (24).JPG",
    "/images/1 (8).JPG",
    "/images/1 (22).JPG",
    "/images/1 (14).JPG",
    "/images/1 (15).JPG",
    "/images/1 (33).JPG",
    "/images/1 (5).JPG",
    "/images/1 (29).JPG",
    "/images/1 (31).JPG",
    "/images/1 (16).JPG",
    "/images/1 (18).JPG",
    "/images/1 (35).JPG",
  ]

  return (
    <div className="App">

      {/* <header className="App-header">
        <h1>Naung Yoe Moe Lwin & No No Yamin</h1>
      </header> */}
      <main>
        <section>
          <div className="main-photo">
            <h1 className='husband'> Naung Yoe </h1>
            <h1 className='wife'> No No </h1>
            <img className='heartImage' src={require('./images/heart.png')} alt={'heart image'} />
            <img src={require('./images/mainphoto.jpg')} alt={`Couple Photo`} />
          </div>
        </section>
        <section>
          <p className='welcome'> Welcome to our wedding website! <br /> We can't wait to share our special day with you. </p>
        </section>
        <section>
          <div className='wedding'>
            <img src={require('./images/wedding.jpg')} alt={`Couple Photo`} />
            <h1>We're Married ! <br /> 12 - 4 - 2024 </h1>
          </div>
          <div className='year'>
            <p className='year_start'>1st Anniversary</p>
            <p className='year_end'>10th Anniversary</p>
          </div>
          <div className='Year0'>
            <div className="first-date">
              <img src={require('./images/first-date.jpg')} alt={`Couple Photo`} />
              <img src={require('./images/Sign_day.jpg')} />
            </div>
          </div>
        </section>
        <section>
          <div className='letsee'>
            <p className='letseeP'> Let's see our journey !</p>
            <img src={require('./images/running.png')} />
          </div>
        </section>

        <section className='fst_anni'>
          <p> This is the start of <br /> something special
            <h4> April - 2014 </h4>
          </p> <img className='first_icon' src={require('./images/first_date.png')} />
          <img className='fst_anni_img' src={require('./images/fst-anni.jpg')} />
        </section>

        <section className='final_year'>
          <img className='intern_img' src={require('./images/intern.jpg')} />
          <p>Love in the workplace: <br /> From office hours to happy hours.
            <h4> May - 2018</h4>
          </p><img className='intern_photo' src={require('./images/intern_photo.png')} />
        </section>

        <section className='internship'>
          <p>
            We did it together - graduation as our relationship goals.
            <h4> Feb - 2020</h4>
          </p> <img className='final_photo' src={require('./images/final_photo.png')} />
          <img className='final_img' src={require('./images/final_year.jpg')} />
        </section>

        <section className='mogok'>
          <img className='mgk_img' src={require('./images/mogok.jpg')} />
          <p> His first visit to my hometown,<br /> and it already feels like home with him here.
            <h4> April - 2023 </h4>
          </p><img className='mgk_home' src={require('./images/home.png')} />
        </section>

        <section className='propose'>
          <p> Say 'I Do' to a lifetime of love.
            <h4> 11 Jan - 2024</h4>
          </p><img className='propose_photo' src={require('./images/propose_photo.png')} />
          <img className='pro_img' src={require('./images/propose.jpg')} />
        </section>

        <section className='ending'>
          <div className='end'>
            <h3> Our journey ahead is filled with love. </h3>
            <img className='love_bird' src={require('./images/love-birds.png')} />
          </div>
          <img className='ending_img' src={require('./images/ending.jpg')} />
        </section>

        <div className="album">
          <PhotoGallery images={images} />
        </div>

        <section className='kissing'>
          <img src={require('./images/kiss.jpg')} />
        </section>

        <section> 
          <p className='thank'> We hope you enjoy celebrating with us and thank you for making our day so special !! </p>
          <p className='powered'> This wedding website is powered by <a href='https://www.facebook.com/htetaung.lucifer' target='blank'>@Htet Aung</a></p>
        </section>
      </main>
    </div>
  );
}

export default App;
