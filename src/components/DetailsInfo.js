import React from 'react';
import './DetailsInfo.css'
class DetailsInfo extends React.Component{
    render(){
        return(
        <div>
             <div className = ' col-12 row details-info '>
                    <div className = 'info-item '>
                        <h4>New cases</h4>
                        <p>346</p>
                    </div>
                    <div className = 'info-item '>
                        <h4>Dead</h4>
                        <p>8</p>
                    </div>
                    <div className = 'info-item '>
                        <h4>Recovered</h4>
                        <p>56</p>
                    </div>
                    <div className = 'info-item '>
                        <h4>Tests</h4>
                        <p>200</p>
                    </div>
                    <hr className = 'container' />
                </div>
                <div className = ' col-12 row details-info '>
                    <h3 className = 'col-12'>Total numbers</h3>
                    <div className = 'info-item '>
                        <h4>Total cofirmed</h4>
                        <p>9,746</p>
                    </div>
                    <div className = 'info-item '>
                        <h4>Dead</h4>
                        <p>533</p>
                    </div>
                    <div className = 'info-item '>
                        <h4>Recovered</h4>
                        <p>2,172</p>
                    </div>
                    <div className = 'info-item '>
                        <h4> Total tests</h4>
                        <p>5,400</p>
                    </div>
                    <hr className = 'container' />
                </div>
                <div className = 'details-info-body'>
                    <a href ='/'>Find out more statistics abour Covide 19</a>
                    <div className = 'latest-news'>
                        <h4>Latest news</h4>
                        <div className = 'latest-news-info'>
                            <a href = '/'>WHO statement: Tobacco use and COVID-19</a>
                            <p>lorem ipsum dolor sit amet,consecteture adipsicing elit.Aliquim blanquam nunic sed pulvinar lobortis. Curbature at borta lorem, in vivira quam. Maecenas eget commode lorem </p>
                            <hr/>
                        </div>
                        <div className = 'latest-news-info'>
                            <a href = '/'>WHO statement: Tobacco use and COVID-19</a>
                            <p>lorem ipsum dolor sit amet,consecteture adipsicing elit.Aliquim blanquam nunic sed pulvinar lobortis. Curbature at borta lorem, in vivira quam. Maecenas eget commode lorem </p>
                            <hr/>
                        </div>
                        <div className = 'latest-news-info'>
                            <a href = '/'>WHO statement: Tobacco use and COVID-19</a>
                            <p>lorem ipsum dolor sit amet,consecteture adipsicing elit.Aliquim blanquam nunic sed pulvinar lobortis. Curbature at borta lorem, in vivira quam. Maecenas eget commode lorem </p>
                            
                        </div>
                    </div>
                </div>
                <div className = 'latest-news-footer'>
                    <div className = 'footer-item'>
                        <span className = 'circle'></span>
                        <span>Area with confirmed cases</span>
                    </div>
                    <div className = 'footer-item'>
                        <span className = 'circle'></span>
                        <span>Area with suspected cases</span>
                    </div>
                    <div className = 'footer-item'>
                        <span className = 'circle'></span>
                        <span>Area with new cases</span>
                    </div>
                </div>
        </div>
           
        
        )
    }
}
export default DetailsInfo;