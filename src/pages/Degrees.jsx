import {
    container,
    mainContainer,
    titleContainer,
    title,
    bar,
    degrees,
    degree,
    degreeTitle,
    degreeIcon,
    degreeText
} from '../styles/modules/pages/Degrees.module.css'
import { Book, Certificate } from '../svgs'

export const Degrees = () => {
    return (
        <section className={ container } id="degrees">
            <div className={ mainContainer }>
                <div className={ titleContainer }>
                    <h2 className={ title }><span>04.</span> Educación</h2>
                    <div className={ bar }></div>
                </div>

                <div className={ degrees }>
                    <div className={ degree }>
                        <Book className={ degreeIcon } /> 
                        <h2 className={ degreeTitle }>Ingeniería en informática</h2>
                        <p className={ degreeText }>Cursando primer cuatrimestre del segundo año de Ingeniería en informática en la <span>UADE</span> (Universidad Argentina de la Empresa)</p>
                    </div>
                    <div className={ degree }>
                        <Certificate className={ degreeIcon } /> 
                        <h2 className={ degreeTitle }>React: De cero a experto</h2>
                        <p className={ degreeText }>Finalicé un curso de React en la plataforma online de aprendizaje <span>Udemy</span>.</p>
                    </div>
                    <div className={ degree }>
                        <Certificate className={ degreeIcon } /> 
                        <h2 className={ degreeTitle }>React: Aplicaciones en tiempo real con Socket-io</h2>
                        <p className={ degreeText }>Finalicé un curso de Socket-IO en la plataforma online de aprendizaje <span>Udemy</span></p>
                    </div>
                    <div className={ degree }>
                        <Certificate className={ degreeIcon } /> 
                        <h2 className={ degreeTitle }>React Native: Aplicaciones nativas para IOS y Android</h2>
                        <p className={ degreeText }>Estoy realizando un curso de React Native en la plataforma online de aprendizaje <span>Udemy</span>.</p>
                    </div>
                    <div className={ degree }>
                        <Certificate className={ degreeIcon } /> 
                        <h2 className={ degreeTitle }>Electron JS y React JS: Creando aplicaciones de escritorio</h2>
                        <p className={ degreeText }>Estoy realizando un curso de Electron JS en la plataforma online de aprendizaje <span>Udemy</span>.</p>
                    </div>
                    <div className={ degree }>
                        <Certificate className={ degreeIcon } /> 
                        <h2 className={ degreeTitle }>PHP y la Web desde cero: Desarrollo de aplicaciones Web.</h2>
                        <p className={ degreeText }>Finalicé un curso de PHP en la plataforma online de aprendizaje <span>Mastermind</span>.</p>
                    </div>
                    <div className={ degree }>
                        <Certificate className={ degreeIcon } /> 
                        <h2 className={ degreeTitle }>Aprende a programar con python.</h2>
                        <p className={ degreeText }>Finalicé un curso de Python en la plataforma online de aprendizaje <span>Mastermind</span>.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}