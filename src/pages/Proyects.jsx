import {
    container,
    mainContainer,
    titleContainer,
    title,
    bar,
    proyectsContainer
} from '../styles/modules/pages/Proyects.module.css'

export const Proyects = () => {
    return (
        <section className={ container } id="proyects">
            <div className={ mainContainer }>
                <div className={ titleContainer }>
                    <h2 className={ title }>Proyectos</h2>
                    <div className={ bar }></div>
                </div>

                <div className={ proyectsContainer }>

                </div>
            </div>
        </section>
    )
}