import React from 'react';
import NavBar from './components/NavBar'
import Body from './components/Body'
import GoogleMap from './components/GoogleMapsApi';
import Footer from './components/footer'

class App extends React.Component{
    render(){
        return(
            <div>
                <GoogleMap />
                <NavBar />
                <Body />
                <Footer />
            </div>
        );
    }
}
export default App;