import React, { Component } from 'react';
import Container from './Container';
import Chart from '../Component/Chart/Chart'
import {Route, Switch, Redirect} from 'react-router-dom';


class NavLinks extends Component {
    render () {
        return (
            <div>
                
                <Switch>
                    <Route path ="/charts" component={Chart}/>
                    <Route path ="/weather" component={Container}/>
                    <Redirect from = "/" to="/weather"/>
                </Switch>    
            </div>
        );
    }
}

export default NavLinks;