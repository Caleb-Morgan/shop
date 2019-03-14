import React, { Component } from 'react';
import {
    Form, message, Tag
} from 'antd';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import { LoginBox, LoginFrom, FromShow, Logo, Input, Tags, Button } from './style';
import *as creaters from './store/actionCreter';
import logo from '../../logo.svg';

class NormalLoginForm extends Component {
    componentDidUpdate(){
        const {msg, msgStr, loginstatus, clearMsg}  = this.props;
        if (msg === "success" && msgStr) {
            message.success(msgStr, 2, loginstatus);
        } else if (msg === "waring" && msgStr) {
            message.warning(msgStr, 2, clearMsg);
        } else if (msg === "error" && msgStr) {
            message.error(msgStr, 2, clearMsg);
        }
    }
    render() {
        const { provingLogin, Login, account, password, changeInput } = this.props;
        if (Login) {
            return (<Redirect to="/login"></Redirect>)
        } else {
            return (
                <LoginBox>
                    <FromShow>
                        <LoginFrom>
                            <Logo><img src={logo}/></Logo>
                            <Tags>
                                <span className="active">登录</span>
                                <span>注册</span>
                            </Tags>
                            <Input>
                                <span className={ 'input input--hoshi' + (account ? ' input--filled':'')}>
                                    <input className="input__field input__field--hoshi" autoFocus="autoFocus" type="text" name="account" value={ account } onChange={(e) =>{changeInput(e)}} />
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1" htmlFor="input-4">
                                        <span className="input__label-content input__label-content--hoshi">用户名</span>
                                    </label>
                                </span>
                            </Input>
                            <Input>
                                <span className={ 'input input--hoshi' + (password ? ' input--filled':'')}>
                                    <input className="input__field input__field--hoshi" type="password" name="password" value={ password } onChange={(e) =>{changeInput(e)}} />
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1" htmlFor="input-4">
                                        <span className="input__label-content input__label-content--hoshi">密码</span>
                                    </label>
                                </span>
                            </Input>
                            <Button onClick={() =>{provingLogin(this)}}>登录</Button>
                        </LoginFrom>
                    </FromShow>

                </LoginBox>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Login: state.getIn(['login', 'Login']),
        msg: state.getIn(['login', 'msg']),
        msgStr: state.getIn(['login', 'msgStr']),
        account: state.getIn(['login', 'account']),
        password: state.getIn(['login', 'password'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        provingLogin(_this) {
            const account = _this.props.account.trim();
            const password = _this.props.password.trim();
            const data = {account, password};
            if(!account){
                dispatch(creaters.changeMsg('error', '用户名不能为空！'));
                return;
            }
            if(!password){
                dispatch(creaters.changeMsg('error', '密码不能为空！'));
                return;
            }
            dispatch(creaters.checkLogin(data))
        },
        clearMsg() {
            dispatch(creaters.changeMsg('succer', ''));
        },
        loginstatus() {
            dispatch(creaters.loginStatus(true))
        },
        changeInput(event){
            let target = event.target;
            let name = target.name;
            let value = target.type === 'checkbox' ? target.checked : target.value
            dispatch(creaters.changeInput(name, value))
        }
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);  