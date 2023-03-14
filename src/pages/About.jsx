import {
    container,
    mainContainer,
    titleContainer,
    title,
    bar,
    paragraph,
    technologies,
    techonologie
} from '../styles/modules/pages/About.module.css'

export const About = () => {
    return (
        <section className={ container } id="about">
            <div className={ mainContainer }>
                <div className={ titleContainer }>
                    <h2 className={ title }><span>01.</span> Sobre Mi</h2>
                    <div className={ bar }></div>
                </div>
                
                <p className={ paragraph }>
                    Hola! Mi nombre es Enzo y disfruto mucho de crear cosas
                    que viven en el internet. Mi interes en el desarrollo web y
                    en la programación en sí surgió a mediados de 2019 cuando
                    decidí intentar desarrollar mi propio servidor de un juego
                    del que disfrutaba mucho en ese entonces.
                </p>

                <p className={ paragraph }>
                    Luego de muchos videos, pruebas y errores, al cabo de un año
                    conseguí realizar un servidor exitoso con más de 200 personas 
                    jugando en simultáneo.
                </p>

                <p className={ paragraph }>
                    Algunas de las tecnologías con las que estuve trabajando recientemente
                    son:
                </p>

                <ul className={ technologies }>
                    <li className={ techonologie }>
                        <span>{ ">" }</span>
                        JavaScript
                    </li>
                    <li className={ techonologie }>
                        <span>{ ">" }</span>
                        Node JS
                    </li>
                    <li className={ techonologie }>
                        <span>{ ">" }</span>
                        Mongo DB
                    </li>
                    <li className={ techonologie }>
                        <span>{ ">" }</span>
                        React
                    </li>
                    <li className={ techonologie }>
                        <span>{ ">" }</span>
                        Express
                    </li>
                    <li className={ techonologie }>
                        <span>{ ">" }</span>
                        Socket IO
                    </li>
                </ul>
            </div>
        </section>
    )
}
