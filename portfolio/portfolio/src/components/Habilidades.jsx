import './Habilidades.css'
import reactlogo from '../assets/react.svg'
import htmlLogo from '../assets/html.svg'
import cssLogo from '../assets/css.svg'

const Habilidades = () => {
  return (
    <section className='abilities-section'>
        <h2>Habilidades</h2>
        <div className='logos'>
            <img src={htmlLogo} alt="HTML" />
            <img src={cssLogo} alt="CSS" />
            <img src={reactlogo} alt="React" />
        </div>
    </section>
  )
}

export default Habilidades