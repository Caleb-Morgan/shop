import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Index from './page/index';
import Login from './page/login';
import 'antd/dist/antd.css';
import { Iconfont } from './static/iconfont';
import Head from './common/header';
import {Layout} from 'antd';
const  { Header, Content, Footer } = Layout;

class App extends Component{
  render(){
    return(
      <Provider store={ store }>
        <Iconfont/>
        <BrowserRouter>
          <Fragment>
            <Header>
              <Head></Head>
            </Header>
            <Content>
              <Route path="/" exact component={ Index }></Route>
              <Route path="/login" exact component={ Login }></Route>
            </Content>
            <Footer>

            </Footer>
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;