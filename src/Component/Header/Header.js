import React from 'react';
import './Header.css'

const header = () =>(
    <div>  
        <div className = "Header">
            <h1>Bangalore</h1>
        </div>  
        
        <div className = "HeaderTabs">
            <nav>
                <ul>
                    <li>
                        <a href="/">List</a>
                    </li>
                    <li>
                        <a href="/charts">Chart</a>
                    </li>
                </ul>
            </nav> 
        </div>   
    </div>
)



export default header;