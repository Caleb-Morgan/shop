import React, { Component } from 'react';
import { HeaderBox } from './style';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import *as creaters from './store/actionCreater';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class Header extends Component{
    componentDidMount(){
        this.props.bindEvent();
    }
    render(){
        const { scroll, hoverIndex, onmousehover } = this.props;
        const menu = [
            {id: 1, value: '商品', url:'/shop'},
            {id: 2, value: '品牌', url:'/pinpai'},
            {id: 3, value: '联系', url:'/contact'},
            {id: 4, value: '关于', url:'/about'}
        ]
        return(
            <HeaderBox>
                <Row type="flex" justify="center" gutter={16}>
                    <Col lg={2}>
                        <Link className="lg7" className="logo" to="/" onClick={() =>{onmousehover(true)}}>
                            <img src="./folks.png" className={"white-brand" + (scroll? "" :" show")} />
                            <img src="./folks-b.png" className={"brown-brand" + (scroll? " show":"")} />
                        </Link>
                    </Col>
                    <Col lg={7}>
                        {/* <CSSTransition in={0 !== hoverIndex} timeout={500} classNames="fade">
                            <div className="menu-header">
                                {0 !== hoverIndex? <div className="border">s</div>:'s'}
                            </div>
                        </CSSTransition> */} 
                        <div className="menu-header">
                            <ul>
                            
                                {menu.map((item, index) =>{
                                    return (
                                        <li  key = {item.id}>
                                            <Link to={item.url} onMouseOver={() =>{onmousehover(index)}} onMouseLeave={() =>{onmousehover(-1)}}>
                                                {item.value }
                                                <TransitionGroup>{
                                                    
                                                    (index === hoverIndex?
                                                    <CSSTransition timeout={300} classNames="fade" unmountOnExit>
                                                    
                                                        <div className={"border" + (index === hoverIndex?' active':'')}></div>
                                                    
                                                    </CSSTransition> :'')
                                                    
                                                }
                                                </TransitionGroup>
                                                {/* <CSSTransition in={index === hoverIndex} timeout={600} classNames="fade" unmountOnExit>
                                                    
                                                <div className={"border" + (index === hoverIndex?' active':'')}></div>
                                                    
                                                </CSSTransition>  */}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                            </div>
                    </Col>
                    <Col lg={3}>
                        <div  className="menu-header">
                            <ul>
                                <li className="user-menu"><Link to="/"><span className="icon iconfont">&#xe7ce;</span></Link></li>
                                <li className="user-menu"><Link to="/"><span className="icon iconfont">&#xe642;</span></Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </HeaderBox>
        )
    }
}

const stateToProps = (state) =>{
    return {
        scroll: state.getIn(['header', 'scroll']),
        hoverIndex: state.getIn(['header', 'hoverIndex'])
    }
}

const dispatchToProps = (dispatch) =>{
    return{
        bindEvent(){
            window.addEventListener('scroll', () =>{
                console.log(document.documentElement.scrollTop)
                if(document.documentElement.scrollTop > 200){
                    dispatch(creaters.changeScroll(true))
                }else{
                    dispatch(creaters.changeScroll(false))
                }
            })
        },
        onmousehover(index){
            console.log(index)
            dispatch(creaters.onMouseHover(index))
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Header);