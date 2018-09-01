import React, { Component } from 'react';
import Container from './Container';
import Chart from '../Component/Chart/Chart'
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from '../Component/Header/Header';

class NavLinks extends Component {
    render () {
        return (
            <div>
                <Header/>
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