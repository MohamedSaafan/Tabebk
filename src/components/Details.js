import React from 'react';
import './Details.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import DetailsInfo from './DetailsInfo';
const Details = (props)=>{
    return(
        <div className = 'big-container-wrapper'>
            <div className = 'Details-container row '>
                
                <div className = 'Details-heading  row col-12'>
                    <div className = 'heading-left col-9'>
                        <div className = 'wrapper'>
                            <h3>Latest data</h3>
                            <p>Last update 15 minutes ago</p>
                        </div>
                        
                    </div>
                    <div className = 'heading-right col-3 '> 
                        <div className = 'wrapper'>
                        <img  src = 'doubleArrowsLeft.png' className = 'mr-2' alt = 'arrow-left'/>
                    
                        <span>Hide</span>
                        </div>
                    </div>
                    <DetailsInfo />
                    
                    
                </div>
            </div>
        </div>
    )
}





export default Details ;