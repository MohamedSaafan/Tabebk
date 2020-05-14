import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './SearchBar.css'
const SearchBar = (props)=>{
    return(
        <div className = ' mb-3 search-bar col-6'>
            <form>
                    <div className = 'search-wrapper pl-4 rounded'>
                        <span style={{fontFamily:'Arial, FontAwesome'}} >&#xF002;</span>
                        <input   type = 'text' className = ''  placeholder = ' Search by area or government' />
                    </div>
               
                <input className = 'btn btn-primary ml-2' type = 'submit' value = 'Search' />
            </form>
        </div>
    )
}
export default SearchBar;