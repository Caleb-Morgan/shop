import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { Banner } from './style';

class Index extends Component{
    render(){
        return(
            <Fragment>
                <Banner>
                    <img src="./folks.png" alt="test"/>
                    <div className="bottom">SHOP ONLINE</div>
                </Banner>
                <Row>
                   <Col></Col> 
                </Row>
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