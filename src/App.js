import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
//import Index from './page/index';
import Login from './page/login';

class App extends Component{
  render(){
    return(
      <Provider store={ store }>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={ Login }></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;