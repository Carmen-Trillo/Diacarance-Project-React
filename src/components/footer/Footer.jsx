import logo from '../../assets/img/logo/logo-DTS-header.png'
import facebook from '../../assets/img/social/facebook verde.png'
import instagram from '../../assets/img/social/instagram verde.png'
import linkedin from '../../assets/img/social/linkedin verde.png'
import twitter from '../../assets/img/social/twitter.png'
import "./Footer.css"
import "../../index.css"

export default function Footer(){
    return (
        <footer>
            <div id="container1">
                <div id="links">
                    <ul>
                        <li><a href="">| Quiénes somos</a></li>
                        <li><a href="">| Nuestra cartera</a></li>
                        <li><a href="">| Partners</a></li>
                        <li><a href="">| Trabaja con nosotros</a></li>
                        <li><a href="">| Contacto</a></li> 
                    </ul>
                </div>

                <div id="social">
                    <h2>Síguenos</h2>
                        <a title="facebook" href="" target="_blank"><img src={facebook} alt="facebook"/></a>
                        <a title="instagram" href="" target="_blank"><img src={instagram} lt="instagram"/></a>
                        <a title="linkedin" href="" target="_blank"><img src={linkedin} alt="linkedin"/></a>
                        <a title="twitter" href="" target="_blank"><img src={twitter} alt="twitter"/></a>
                </div>

                <div id="logo">
                    <a href="">
                        <img src={logo} alt="Logo DTS" width="60%"/>
                    </a>
                </div>
            </div>

            <div id="container2">
                <div id="copyright">
                    <p>©Copyright <strong>DTS, Diacarance Technology Solutions</strong>. Todos los derechos reservados</p>
                </div>

                <div id="legal">
                    <a href="" id="politica">Aviso Legal</a>
                    <a href="" id="privacidad">Política de Privacidad</a>
                    <a href="" id="cookies">Política de Cookies</a>
                </div>
            </div>
        </footer>
    )
}