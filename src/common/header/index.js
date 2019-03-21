import React, { Component } from 'react';
import { HeaderBox, ShopWrapper, ShopFooter, ShopContent } from './style';
import { Row, Col, List, Avatar, Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import *as creaters from './store/actionCreater';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class Header extends Component{
    componentDidMount(){
        this.props.bindEvent();
    }
    render(){
        const { scroll, hoverIndex, onmousehover, shopList, ellipsis, shopShow } = this.props;
        const menu = [
            {id: 1, value: '商品', url:'/shop'},
            {id: 2, value: '品牌', url:'/pinpai'},
            {id: 3, value: '联系', url:'/contact'},
            {id: 4, value: '关于', url:'/about'}
        ]
        return(
            <HeaderBox>
                <Row type="flex" justify="center" gutter={16}>
                    <Col lg={3}>
                        <Link className="lg7" className="logo" to="/">
                            <img src="./folks.png" className={"white-brand" + (scroll? "" :" show")} />
                            <img src="./folks-b.png" className={"brown-brand" + (scroll? " show":"")} />
                        </Link>
                    </Col>
                    <Col lg={10}>
                        <div className="menu-header">
                            <ul>
                            
                                {menu.map((item, index) =>{
                                    return (
                                        <li  key = {item.id}>
                                            <Link to={item.url} onMouseOver={() =>{onmousehover('hoverIndex', index)}} onMouseLeave={() =>{onmousehover('hoverIndex', -1)}}>
                                                {item.value }
                                                <TransitionGroup>{
                                                    
                                                    (index === hoverIndex?
                                                    <CSSTransition timeout={300} classNames="fade" unmountOnExit>
                                                    
                                                        <div className={"border" + (index === hoverIndex?' active':'')}></div>
                                                    
                                                    </CSSTransition> :'')
                                                    
                                                }
                                                </TransitionGroup>
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
                                <li className="user-menu" onMouseOver={()=>{onmousehover('shopShow', true)}} onMouseLeave={()=>{onmousehover('shopShow', false)}}>
                                    <Link to="/"><span className="icon iconfont">&#xe642;</span></Link>
                                    <ShopWrapper className={shopShow?'active':''}>
                                        <span>最新加入的商品</span>
                                        <List 
                                        dataSource={shopList.toJS()}
                                        renderItem={item =>(<List.Item>
                                            <List.Item.Meta
                                            avatar={<Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={<a href="https://ant.design">{item.name}</a>}
                                            description={
                                            <ShopContent>
                                                <Tooltip title={item.Introduction}>
                                                    <div className="left">{ellipsis(item.Introduction)}</div>
                                                </Tooltip>
                                                <div className="right">
                                                    <span>￥100.00<em> * 1</em></span><br/>
                                                    <span className="del">删除</span>
                                                </div>
                                            </ShopContent>}
                                            />
                                            </List.Item>)}
                                        ></List>
                                        <ShopFooter>共 {shopList.toJS().length} 件商品，总计￥ XX<Button>去购物车</Button></ShopFooter>
                                    </ShopWrapper>
                                </li>
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
        hoverIndex: state.getIn(['header', 'hoverIndex']),
        shopList: state.getIn(['header', 'shopList']),
        shopShow: state.getIn(['header', 'shopShow'])
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
        onmousehover(type, index){
            dispatch(creaters.onMouseHover(type, index))
        },
        ellipsis(item){
            if(item.length>16){
                return item.slice(0,15) + '...'
            }else{
                return item;
            }
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Header);