import { useState } from 'react'
import {
    container,
    mainContainer,
    titleContainer,
    title,
    bar,
    experience,
    experienceSidebar,
    experienceSidebarItem,
    experienceSidebarItemSelected,
    experienceContainer,
    experienceTitle,
    experienceDate,
    experienceText,
    experienceTextParagraph
} from '../styles/modules/pages/Experience.module.css'

export const Experience = () => {

    const [experienceSelected, setExperienceSelected] = useState('turnate');

    return (
        <section className={ container } id="experience">
            <div className={ mainContainer }>
                <div className={ titleContainer }>
                    <h2 className={ title }>Experiencia</h2>
                    <div className={ bar }></div>
                </div>

                <div className={ experience }>
                    <ul className={ experienceSidebar }>
                        <li 
                            className={ `${ experienceSidebarItem } ${ (experienceSelected == 'turnate') && experienceSidebarItemSelected }` }
                            onClick={ () => setExperienceSelected('turnate') }    
                        >
                            Turnate    
                        </li>      
                        <li 
                            className={ `${ experienceSidebarItem } ${ (experienceSelected == 'freelancing') && experienceSidebarItemSelected }` }
                            onClick={ () => setExperienceSelected('freelancing') }
                        >
                            Freelancing  
                        </li>          
                        <li 
                            className={ `${ experienceSidebarItem } ${ (experienceSelected == 'inmunes') && experienceSidebarItemSelected }` }
                            onClick={ () => setExperienceSelected('inmunes') }
                        >
                            Inmunes RP
                        </li>        
                    </ul>

                    {(experienceSelected == 'turnate') && (
                        <div className={ experienceContainer }>
                            <h1 className={ experienceTitle }>Desarrollador <span>@Turnate</span></h1>
                            <span className={ experienceDate }>Ene 2023 - Actualidad</span>

                            <div className={ experienceText }>
                                <p className={ experienceTextParagraph }>
                                    <span>{">"}</span>
                                    Turnate busca ayudar a los comercios que funcionan con turnos, mediante
                                    un conjunto de productos tecnológicos. (Sitio web, Panel administrativo, Aplicación de dispositivos móviles)
                                </p>
                                <p className={ experienceTextParagraph }>
                                    <span>{">"}</span>
                                    Es mi propio proyecto y actualmente se encuentra en desarrollo.
                                </p>
                                <p className={ experienceTextParagraph }>
                                    <span>{">"}</span>
                                    Utilizo una amplia variedad de tecnologías y herramientas para llevar a cabo el desarrollo de mi proyecto
                                    digital. (React, Electron, JavaScript, Mongo DB, Node JS, Express, Socket IO, React Native)
                                </p>
                            </div>
                        </div>
                    )}
                    {(experienceSelected == 'freelancing') && (
                        <div className={ experienceContainer }>
                            <h1 className={ experienceTitle }>Desarrollador <span>@Freelancing</span></h1>
                            <span className={ experienceDate }>Ene 2021 - Dic 2021</span>
                            
                            <div className={ experienceText }>
                                <p className={ experienceTextParagraph }>
                                    <span>{">"}</span>
                                    Desarrollé para clientes del exterior, script, funcionalidades, e interfaces de servidores del juego FiveM.
                                </p>
                                <p className={ experienceTextParagraph }>
                                    <span>{">"}</span>
                                    Trabajé con una amplia variedad de tecnologías y herramientas. (Lua, HTML, CSS, PHP, jQuery, MySQL, JavaScript)
                                </p>
                            </div>
                        </div>
                    )}
                    {(experienceSelected == 'inmunes') && (
                        <div className={ experienceContainer }>
                            <h1 className={ experienceTitle }>Desarrollador <span>@InmunesRP</span></h1>
                            <span className={ experienceDate }>Ene 2020 - Dic 2020</span>

                            <div className={ experienceText }>
                                <p className={ experienceTextParagraph }>
                                    <span>{">"}</span>
                                    Inmunes RP fue mi servidor de FiveM, el cual tuvo un promedio diario de más de 150 jugadores en simultáneo.
                                </p>
                                <p className={ experienceTextParagraph }>
                                    <span>{">"}</span>
                                    Fue desarrollado con una amplia variedad de tecnologías. (Lua, HTML, CSS, JavaScript, MySQL, PHP, jQuery)
                                </p>
                                <p className={ experienceTextParagraph }>
                                    <span>{">"}</span>
                                    Hosteado y alojado en un servidor dedicado en la empresa OVH Cloud en un sistema operativo Linux.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}