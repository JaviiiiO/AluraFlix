import './Main.css';

export const Main = () => {
  return (
    <div className="principal-section">    
        <section className='left'>
            <h1>Hola, mi nombre es Javier.</h1>
            <p>Soy un <span className="title">desarrollador web jr.</span> apasionado por crear aplicaciones web atractivas y funcionales. 
            Disfruto enfrentando nuevos desafíos y aprendiendo continuamente para mejorar mis habilidades. </p>
        </section>
        <section className="right">
            <img src='src/assets/1.webp' alt='Javier Ordoñez' className='photo photo1' />
            <img src='src/assets/2.webp' alt='Javier Ordoñez2' className='photo photo2' />
        </section>
    </div>
  )
}
