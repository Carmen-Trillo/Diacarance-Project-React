import "./Companies.css"
import "../../index.css"
import boing from '../../assets/img/companies/boing.png'
import cartoon from '../../assets/img/companies/cartoon.webp'
import lego from '../../assets/img/companies/lego.png'
import nestle from '../../assets/img/companies/Logo-Nestle.png'
import toysrus from '../../assets/img/companies/toysrus.png'
import urban from '../../assets/img/companies/urban planet.jpg'

export default function Companies(){
    return (
        <div id="companies">
            <h2>Casos de éxito</h2>
            <p>Ya han confiado en nosotras</p>
            <div class="logos">
                <a title="lego" href="" target="_blank"><img src={lego} alt="lego"/></a>
                <a id="boing" title="boing" href="" target="_blank"><img src={boing} alt="boing"/></a>
                <a title="cartoon" href="" target="_blank"><img src={cartoon} alt="cartoon"/></a>
                <a title="Nestle" href="" target="_blank"><img src={nestle} alt="lego"/></a>
                <a id="toysrus" title="toysrus" href="" target="_blank"><img src={toysrus} alt="toysrus"/></a>
                <a id="urban" title="urban" href="" target="_blank"><img src={urban} alt="urban"/></a>
            </div>
        </div>
    )
}