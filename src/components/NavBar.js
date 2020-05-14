import React from 'react';
import './NavBar.css';
import AppleStore from '../imgs/Group 4/Apple store.png';
import GoogleStore from  '../imgs/Group 4/google store.png';
import SearchBar from './SearchBar';
import NavBarInfo from './NavBarInfo'
 const NavBar = (props)=>{
    return(
        <div className = 'py-4 container-fluid nav-bar row'>
            <div className = 'logo col-2'>
                <img src='Bitmap.png'  alt = 'logo'/>
                <img src = 'Bitmap-1.png' alt = 'log-text' />
            </div>
            < SearchBar />
            <div className = 'nav-bar-info col-4 row'>
                <NavBarInfo src =  {AppleStore} />
                <NavBarInfo src = {GoogleStore}/>
            </div>
        </div>
    )
}
export default NavBar;