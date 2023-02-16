import "./Social.css";
import facebook from "../../assets/img/social/facebook.png"
import instagram from "../../assets/img/social/instagram.png"
import twitter from "../../assets/img/social/gorjeo.png"
import linkedin from "../../assets/img/social/linkedin.png"

export default function Social(){
    return (
      <div className="socialHeader">
        <a href="#"><img src={facebook} alt="facebook"/></a> 
        <a href="#"><img src={instagram} alt="instagram"/></a> 
        <a href="#"><img src={twitter} alt="twitter"/></a>
        <a href="#"><img src={linkedin} alt="linkedin"/></a>
      </div>
    );
}

