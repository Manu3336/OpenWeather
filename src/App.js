import React, {Component} from 'react';
import NavLinks from './Container/NavLinks';
import {BrowserRouter} from 'react-router-dom';



class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <NavLinks/>
        </div>
      </BrowserRouter>  
      );
  }
};

export default App;