import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

const header = () =>(
    <div>  
        <div className = "Header">
            <h1>Mumbai, IN</h1>
        </div>  
        
        <div className = "HeaderTabs">
            <nav>
                <ul>
                    <li>
                        <Link to="/">List</Link>
                    </li>
                    <li>
                        <Link to="/charts">Chart</Link>
                    </li>
                </ul>
            </nav> 
        </div>   
    </div>
)



export default header;