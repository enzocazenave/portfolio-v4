import { useEffect } from 'react'
import {
    container,
    image,
    nav,
    navItem,
    navItemAnchor,
    navItemBrackets,
    navItemSelected,
    footer,
    networks,
    text,
    anchor,
    network
} from '../styles/modules/components/Sidebar.module.css'

import { Github, Linkedin, Instagram } from '../svgs'
import ScrollReveal from 'scrollreveal'

export const Sidebar = () => {

    useEffect(() => {
        ScrollReveal({ reset: false }).reveal('#nav', { delay: 600 })
    }, []);

    useEffect(() => {
        const scrollContainer = document.querySelector('#scrollContainer')
    
        const handleScroll = (e) => {
            const navItems = document.querySelectorAll('.navItem');
            const sections = document.querySelectorAll('section');
            let current = '';
        
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (e.target.scrollTop >= (sectionTop - sectionHeight / 3)) {
                    current = section;
                }
            })
        
            navItems.forEach(navItem => {
                const condition = navItem.id == `${ current.getAttribute('id') }-item`;
                navItem.classList.toggle(navItemSelected, condition)
            })
        }

        scrollContainer.addEventListener('scroll', handleScroll);

        return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <nav className={ container } id="nav">
            <img
                src="https://cdn.discordapp.com/attachments/1008885821027405958/1055277706272591902/Captura_de_pantalla_2022-12-20_a_las_21.38.57-min.png"
                className={ image }
            />

            <ul className={ nav }>
                <li className={ `${navItem} navItem ${ navItemSelected }` } id="home-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#home" className={ navItemAnchor }>Inicio</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="about-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#about" className={ navItemAnchor }><span>01.</span> Sobre Mi</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="experience-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#experience" className={ navItemAnchor }><span>02.</span> Experiencia</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="proyects-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#proyects" className={ navItemAnchor }><span>03.</span> Proyectos</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="degrees-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#degrees" className={ navItemAnchor }><span>04.</span> Educación</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="contact-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#contact" className={ navItemAnchor }><span>05.</span> Contacto</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
            </ul>
            
            <footer className={ footer }>
                <div className={ networks }>
                    <a href="https://github.com/enzocazenave" target="_blank">
                        <Github className={ network } />
                    </a>
                    <a href="https://www.linkedin.com/in/enzo-cazenave/" target="_blank">
                        <Linkedin className={ network } />
                    </a>
                    <a href="https://www.instagram.com/chikicazenave_/" target="_blank">
                        <Instagram className={ network } />
                    </a>
                </div>
            </footer>
        </nav>
    )
}