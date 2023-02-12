import "./Navbar.css";
import facebook from "../../assets/img/social/facebook.png"
import instagram from "../../assets/img/social/instagram.png"
import twitter from "../../assets/img/social/gorjeo.png"
import linkedin from "../../assets/img/social/linkedin.png"

function Navbar(){
    return (
        <div className="socialHeader">
          <div className="social">
            <img src={facebook} alt="facebook"/> 
            <img src={instagram} alt="instagram"/> 
            <img src={twitter} alt="twitter"/> 
            <img src={linkedin} alt="linkedin"/> 
          </div>
        </div>
    );
}

export default Navbar