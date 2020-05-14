import React from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import GoogleMap from './components/GoogleMapsApi';
import Footer from './components/footer';
import axios from 'axios';


let cities = require('./components/city.json');

class App extends React.Component{
    state = {
        result:[],
    }
    onFormSumbit = (term)=>{
        // axios.get('https://www.tabebk.com/api/v1/helper/cities',{
        //     params:{search :term},
        //     headers:{
        //     }
        // })
        // .then(response=>{
        //     this.setState({result:response})
        // })
        //console.log(cities)
        let response = cities.responseBody;
        let result = response.find((item,index,array)=>{
            return (item.nameEnglish === term || item.nameArabic === term)
        }) 
        console.log(result)

        this.setState({});
    }
    render = ()=>{
        return(
            <div>
                <GoogleMap />
                <NavBar onFormSumbit = {term=>(this.onFormSumbit(term))}/>
                <Body />
                <Footer />
            </div>
        );
    }
}
export default App;