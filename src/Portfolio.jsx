import { About, Experience, Home, Proyects } from './pages'

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
        </div>
    )
}