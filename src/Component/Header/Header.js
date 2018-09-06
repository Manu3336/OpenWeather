import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

const header = (props) =>(
    <div>  
        <div className = "Header">
            
        </div>  
        
        <div className = "HeaderTabs">
            <nav>
                <ul>
                    {/* <li>
                        <Link to="/">List</Link>
                    </li>
                    <li>
                        <Link to="/charts">Chart</Link>
                    </li> */}

                    <li>
                        <div>
                            <h1>{props.keycity}</h1>
                            <input type="text" placeholder="Search City" value={props.keycity} onChange={props.changeCallback}/>
                        </div>
                    </li>
                </ul>
            </nav> 
        </div> 
    </div>
)



export default header;