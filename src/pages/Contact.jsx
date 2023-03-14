import {
    container,
    mainContainer,
    titleContainer,
    title,
    whatsNext,
    text,
    sayHello
} from '../styles/modules/pages/Contact.module.css'

export const Contact = () => {
    return (
        <section className={ container } id="contact">
            <div className={ mainContainer }>
                <div className={ titleContainer }>
                    <span className={ whatsNext }>¿Qué viene ahora?</span>
                    <h2 className={ title }><span>05.</span> Ponte en contacto.</h2>
                </div>
                <p className={ text }>
                    Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tenga una pregunta o simplemente quiera saludar, ¡haré todo lo posible para responderle!
                </p>
                <a href="mailto:encaze@hotmail.com" className={ sayHello }>Dí Hola</a>
            </div>
        </section>
    )
}
