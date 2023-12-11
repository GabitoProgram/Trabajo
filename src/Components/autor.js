import logo from '../assets/img/LIDERES.png';
import facebookLogo from '../assets/img/twt (1).png';
import twitterLogo from '../assets/img/twt (2).png';
import instagramLogo from '../assets/img/twt (3).png';

const Autor = () => {
    return (
      <footer className='mi-footer'>
        <img src={logo} alt="Logo" className='logo'/>
        <h1>Líderes en Tecnología</h1>
        <h2>Gabo</h2>
        <p>Email: gcallisayad@fcpn.edu.bo</p>
        <p>Teléfono: +591 777 777 777</p>
        <div className='redes-sociales'>
          <a href="https://www.facebook.com/">
            <img src={facebookLogo} alt="Facebook" className='red-social'/>
          </a>
          <a href="https://www.twitter.com/">
            <img src={twitterLogo} alt="Twitter" className='red-social'/>
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagramLogo} alt="Instagram" className='red-social'/>
          </a>
        </div>
      </footer>
    );
  };
  
export default Autor;
  