import { Categoria } from './Categoria'
import './Hero.css'

export const Hero = () => {
    return (
        <section className='hero'>
            <div className='left'>
                <Categoria 
                    categoria='Frontend'
                />
                <h1 className='titulo'>
                    Challenge React
                </h1>
                <h2>
                Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </h2>
            </div>
            <div className='right'>
            <iframe width={640} height={333} src="https://www.youtube.com/embed/eiC58R16hb8?si=tLn1HoxGabWyRzUp" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen='true'></iframe>
            </div>
        </section>

    )
}