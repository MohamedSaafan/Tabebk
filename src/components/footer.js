import React from 'react';
import './footer.css';
import AppleStore from '../imgs/Group 4/Apple store.png';
import GoogleStore from  '../imgs/Group 4/google store.png';
import whatsApp from'../imgs/Group 12/logo.png';
import faceBook from '../imgs/Group 12/Icons/_custom/social/facebook.png';
import instgram from '../imgs/Group 12/Icons/_custom/social/instagram.png'
import NavBarInfo from './NavBarInfo';
const Footer = (props)=>{
    return(
        <div className = 'footer row w-100'>
            <div className = 'logo col-1'>
                <img src = 'logo.png' className = 'w-100 ml-3 mt-3'/>
            </div>
            <div className = 'footer-body row col-4 m-2'>
                <p className = 'col-12'>Get the Tabebk app now</p>
                <div className = 'footer-body-item col-5'>
                    <img src = {AppleStore} className = 'w-100'/>
                </div>
                <div className = 'footer-body-item col-5'>
                    <img src = {GoogleStore} className = 'w-100'/>
                </div>
                <p>To advertise on Tabebk</p> <br/>
                <p>info@tabebk.com</p>
            </div>
            <div className = 'tail row col-2'>
                <p className = 'col-12'>Contact us</p> 
                <div className = 'col-12 row'>
                    
                    <img className = 'col-4 w-100' src = {instgram}/>
                    <img className = 'col-4 w-100' src = {faceBook}/>
                    <img className = 'col-4 w-100' src = {whatsApp}/>
                </div>
            </div>
        </div>
    )
}
export default Footer;