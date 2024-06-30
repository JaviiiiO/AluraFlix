import './Hero.css';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import github from '../assets/github.svg';


export function Hero() {
  return (
    <>
    <section className="hero-main">
        <div className="name">
            <h1>Portfolio Web</h1>
        </div>
        <div className="mail">
        <a href="mailto:ordoezjavier23@gmail.com?subject=Hola Javier"><img src={gmail} alt="gmail"></img></a>
        <a href="https://www.instagram.com/javier_ordoez/" target='Blank'><img src={instagram} alt="gmail"></img></a>
        <a href="https://github.com/JaviiiiO" target='Blank'><img src={github} alt="gmail"></img></a>
        </div>
    </section>
    <hr />
    </>
  );
}