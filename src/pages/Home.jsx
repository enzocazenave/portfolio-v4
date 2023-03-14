import { useEffect } from 'react';
import {
    container,
    mainContainer,
    firstLine,
    secondLine,
    thirdLine,
    fourthLine,
    greenText,
    checkResume
} from '../styles/modules/pages/Home.module.css';
import ScrollReveal from 'scrollreveal'


export const Home = () => {

    useEffect(() => {
        ScrollReveal({ reset: false }).reveal('#home', { delay: 600, container: '#scrollContainer' })
    }, []);

    return (
        <section className={ container } id="home">
            <div className={ mainContainer }>
                <div>
                    <span className={ firstLine }>Hola, mi nombre es</span>
                    <h2 className={ secondLine }>Enzo Cazenave.</h2>
                    <h3 className={ thirdLine }>Full Stack Dev.</h3>
                </div>

                <p className={ fourthLine }>Soy un desarrollador <span className={ greenText }>Full Stack</span> especializado en crear (y ocasionalmente diseñar) experiencias digitales excepcionales.</p>
                <a href="#" className={ checkResume }>Echá un vistazo a mi CV</a>
            </div>
        </section>
    )
}