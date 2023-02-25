import estudiamos from '../../assets/img/estudiamos.jpg'
import donde from '../../assets/img/donde.jpg'
import productividad from '../../assets/img/productividad.jpg'
import "./About.css"
import "../../index.css"

export default function About(){
    return (
        <div>
            <div className="offer">
                <h2>¿Qué ofrecemos?</h2>
                <p>Trabajamos con <strong><font color="#066285">algoritmos ultrarrápidos</font></strong> que implementan el <strong><font color="#066285">Big Data</font></strong>, la <strong><font color="#066285">Inteligencia Artificial</font></strong> y <strong><font color="#066285">Machine Learning</font></strong> para que las empresas puedan predecir las <strong><font color="#066285">necesidades y deseos de los niños</font></strong>, de manera que puedan ofrecerles el servicio o producto que se adapte a ellos.</p>
            </div>

            <div id="containerOffer">
                <div id="study" >
                    <img src={estudiamos} alt="estudiamos"/>
                    <br></br>
                    <p>Estudiamos el mundo por ti</p>
                </div>
                <div id="understand">
                    <img src={donde} alt="estudiamos"/>
                    <br></br>
                    <p>Te decimos donde invertir</p>
                </div>
                <div id="productivity">
                    <img src={productividad} alt="estudiamos"/>
                    <br></br>
                    <p>Mejoramos tu productividad</p>
                </div>
            </div>
        </div>
    )
}

