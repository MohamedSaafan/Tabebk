import React from 'react';
import './NavBarInfo.css';
const NavBarInfo = (props)=>{
    return(
         <div className = ' nav-bar-info-wrapper mx-3  col-4  row'>
        {/* //     <div className = ' left px-2 pt-2'>
        //         <i className = {`fa fa-${props.iconName} fa-lg`}></i>
        //     </div>
        //     <div className = 'right '>
        //         <span>{props.info}</span>
        //         <h4>{props.heading}</h4>
        //     </div> */}
            
            
        <img src = {props.src} alt = 'img' />
        </div>
    )
}
export default NavBarInfo;