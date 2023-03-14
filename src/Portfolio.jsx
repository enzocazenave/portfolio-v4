import { About, Contact, Degrees, Experience, Home, Proyects } from './pages'

import {
    container
} from './styles/modules/Portfolio.module.css'

export const Portfolio = () => {
    return (
        <div id="scrollContainer" className={ container }>
            <Home />
            <About />
            <Experience />
            <Proyects />
            <Degrees />
            <Contact />

            <span style={{ textAlign: 'center', display: 'block', padding: '0 2rem 2rem', color: 'var(--dark-light)' }}>
                    Desarrollado por <br/>
                    <a 
                        target="_blank"
                        style={{ color: 'var(--green)', textDecoration: 'none', lineHeight: '1.5' }}
                        href="https://github.com/enzocazenave"
                    >
                        @enzocazenave
                    </a>
                    😉
                </span>
        </div>
    )
}