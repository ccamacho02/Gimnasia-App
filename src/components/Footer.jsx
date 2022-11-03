import React from "react";
import './Footer.css';
import Facebook from '../assets/img/Facebook.png'
import Instagram from '../assets/img/Instagram.png'
import Twitter from '../assets/img/Twitter.png'
import Youtube from '../assets/img/Youtube.png'

function Footer(props){
    return(
        <div className="Foot">
            <a href=""><img width="25" height="25" src = {Facebook}></img></a>
            <a href=""><img width="25" height="25" src = {Instagram}></img></a>
            <a href=""><img width = "25" height="25" src = {Twitter}></img></a>
            <a href=""><img width= "25" height = "25" src = {Youtube}></img></a>
            <div>Derechos Reservados</div>
        </div>
    );
}

export default Footer;