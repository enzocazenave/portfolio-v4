import {
    container,
    mainContainer,
    titleContainer,
    title,
    bar,
    proyectsContainer,
    proyect,
    proyectContent,
    proyectImage,
    proyectSpan,
    proyectTitle,
    proyectText,
    proyectTechnologies,
    proyectGithub,
    proyectLink,
    proyectLinkDisabled,
    moreProyects
} from '../styles/modules/pages/Proyects.module.css'

import { Github, Link } from '../svgs/';

export const Proyects = () => {
    return (
        <section className={ container } id="proyects">
            <div className={ mainContainer }>
                <div className={ titleContainer }>
                    <h2 className={ title }><span>03.</span> Proyectos</h2>
                    <div className={ bar }></div>
                </div>

                <div className={ proyectsContainer }>
                    <div className={ proyect }>
                        <a 
                            style={{
                                backgroundImage: 'url(../../../../turnate.PNG)'
                            }}
                            className={ proyectImage }
                            href="https://github.com/enzocazenave/appointments"
                            target="_blank"
                        ></a>
                        <div className={ proyectContent }>
                            <span className={ proyectSpan }>Proyecto</span>
                            <h1 className={ proyectTitle }>Turnate</h1>
                            <p className={ proyectText }>
                                Una aplicación que está siendo desarrollada por mí, para
                                <span> facilitar la gestión y reserva de turnos</span> para los comercios y clientes del mismo.
                                Pensada para <span> modernizar</span> peluquerías, lavaderos de vehículos, consultorios médicos, etc.
                            </p>
                            <div className={ proyectTechnologies }>
                                <span>React</span>
                                <span>Electron</span>
                                <span>React Native</span>
                                <span>JavaScript</span>
                                <span>Node JS</span>
                                <span>Mongo DB</span>
                                <span>Express</span>
                                <span>Socket IO</span>
                            </div>
                            <div>
                                <a target="_blank">
                                    <Link className={ `${ proyectLink } ${ proyectLinkDisabled }` } />
                                </a>
                                <a target="_blank" href="https://github.com/enzocazenave/appointments">
                                    <Github className={ proyectGithub } />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={ proyect }>
                        <a 
                            className={ proyectImage }
                            href="https://github.com/enzocazenave/twitter"
                            style={{
                                backgroundImage: 'url(../../../../twitter.PNG)'
                            }}
                            target="_blank"
                        ></a>
                        <div className={ proyectContent }>
                            <span className={ proyectSpan }>Proyecto</span>
                            <h1 className={ proyectTitle }>Twitter</h1>
                            <p className={ proyectText }>
                                Un clone de la red social <span>Twitter</span>, con un <span>backend</span> que permite casi todas sus funcionalidades. Creación de cuentas, posteos, editar perfil, etc.
                            </p>
                            <div className={ proyectTechnologies }>
                                <span>React</span>
                                <span>JavaScript</span>
                                <span>Node JS</span>
                                <span>Mongo DB</span>
                                <span>Express</span>
                            </div>
                            <div>
                                <a target="_blank">
                                    <Link className={ `${ proyectLink } ${ proyectLinkDisabled }` } />
                                </a>
                                <a target="_blank" href="https://github.com/enzocazenave/twitter">
                                    <Github className={ proyectGithub } />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={ proyect }>
                        <a 
                            className={ proyectImage }
                            href="https://github.com/enzocazenave/alphabet-soup"
                            target="_blank"
                            style={{
                                backgroundImage: 'url(../../../../sopa.PNG)'
                            }}
                        ></a>
                        <div className={ proyectContent }>
                            <span className={ proyectSpan }>Proyecto universitario en equipo</span>
                            <h1 className={ proyectTitle }>Sopa de letras</h1>
                            <p className={ proyectText }>
                                Una <span>sopa de letras</span> que puede jugarse mediante la terminal, desarrollado con algoritmos y matrices en <span>python</span>. 
                            </p>
                            <div className={ proyectTechnologies }>
                                <span>Python</span>
                                
                            </div>
                            <div>
                                <a target="_blank">
                                    <Link className={ `${ proyectLink } ${ proyectLinkDisabled }` } />
                                </a>
                                <a target="_blank" href="https://github.com/enzocazenave/alphabet-soup">
                                    <Github className={ proyectGithub } />
                                </a>
                            </div>
                        </div>
                    </div>

                    <a target="_blank" href="https://github.com/enzocazenave?tab=repositories" className={ moreProyects }>Más proyectos en mi Github</a>
                </div>
            </div>
        </section>
    )
}