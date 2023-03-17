import { useEffect } from 'react'
import { About, Contact, Degrees, Experience, Home, Proyects } from './pages'

import {
    container
} from './styles/modules/Portfolio.module.css'

export const Portfolio = ({  }) => {

    useEffect(() => {         
        fetch("https://discord.com/api/webhooks/1086092352839487609/qpGmftOTcV9Z6DPYtnOjWZoDI4wLlONVNgZTlZFZShYQqxYesS5wn7OD5S0_u_djIceA", {
            body: JSON.stringify({
              content: `Un cliente ingresó a enzocazenave.com`,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
        })
    }, []);

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