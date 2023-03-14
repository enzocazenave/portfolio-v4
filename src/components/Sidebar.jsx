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

export const Sidebar = () => {

    useEffect(() => {
        const scrollContainer = document.querySelector('#scrollContainer')
    
        const handleScroll = (e) => {
            const navItems = document.querySelectorAll('.navItem');
            console.log(navItems)
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
        <nav className={ container }>
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
                    <a href="#about" className={ navItemAnchor }>Sobre Mi</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="experience-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#experience" className={ navItemAnchor }>Experiencia</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="proyects-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#proyects" className={ navItemAnchor }>Proyectos</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="degrees-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#" className={ navItemAnchor }>Estudios</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="skills-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#" className={ navItemAnchor }>Habilidades</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
                <li className={ `${ navItem } navItem` } id="contact-item">
                    <span className={ navItemBrackets }>{ "{" }</span>
                    <a href="#" className={ navItemAnchor }>Contacto</a>
                    <span className={ navItemBrackets }>{ "}" }</span>
                </li>
            </ul>
            
            <footer className={ footer }>
                <div className={ networks }>
                    <Github className={ network } />
                    <Linkedin className={ network } />
                    <Instagram className={ network } />
                </div>

                <span className={ text }>
                    Desarrollado por <br/>
                    <a 
                        className={ anchor }
                        href="https://github.com/enzocazenave"
                    >
                        @enzocazenave
                    </a>
                    😉
                </span>
            </footer>
        </nav>
    )
}