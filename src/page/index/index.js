import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Banner, Content } from './style';

class Index extends Component{
    render(){
        return(
            <Fragment>
                <Banner>
                    <img src="./folks.png" alt="test"/>
                    <div className="bottom">SHOP ONLINE</div>
                </Banner>
                <Content>
                    <Row type="flex" justify="center" gutter={40}>
                    <Col lg={6}><Link to="/"><img src="./bg.jpg" alt="test"/></Link></Col>
                    <Col lg={6}><Link to="/"><img src="./bg.jpg" alt="test"/></Link></Col> 
                    </Row>
                </Content>
                
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return {

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);