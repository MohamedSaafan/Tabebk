import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './SearchBar.css'
class SearchBar extends React.Component {
    state = {
        term:''
    }
    onInputChange = (event) =>{
        this.setState({term:event.target.value});
    }
    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.onFormSumbit(this.state.term)

    }
    componentDidMount = ()=>{
        console.log(this.props)
    }
     render =() => {
        return(
            <div className = ' mb-3 search-bar col-6'>
                <form onSubmit = {this.onFormSubmit}>
                        <div className = 'search-wrapper pl-4 rounded'>
                            <span style={{fontFamily:'Arial, FontAwesome'}} >&#xF002;</span>
                            <input   type = 'text' className = '' value = {this.state.term} onChange = {this.onInputChange} placeholder = ' Search by area or government' />
                        </div>
                   
                    <input className = 'btn btn-primary ml-2' type = 'submit' value = 'Search' />
                </form>
            </div>
        )

    }

}
export default SearchBar;