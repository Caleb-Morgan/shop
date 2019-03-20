import React, { Component } from 'react';
import { message, Checkbox, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { LoginBox, LoginFrom, FromShow, Logo, Input, Tags, Welcome } from './style';
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
        const { 
            provingLogin, 
            Login, 
            account, 
            password, 
            changeInput, 
            reaccount,
            repassword,
            registe,
            changetype,
            provingRegiste } = this.props;
        if (Login) {
            return (<Redirect to="/"></Redirect>)
        } else {
            let htm = '';
            if(registe){
                htm = <div>
                    <Input>
                        <span className={ 'input input--hoshi' + (reaccount ? ' input--filled':'')}>
                            <input className="input__field input__field--hoshi" type="text" name="reaccount" value={ reaccount } onChange={(e) =>{changeInput(e)}} />
                            <label className="input__label input__label--hoshi input__label--hoshi-color-1" htmlFor="account">
                                <span className="input__label-content input__label-content--hoshi">用户名</span>
                            </label>
                        </span>
                    </Input>
                    <Input>
                        <span className={ 'input input--hoshi' + (password ? ' input--filled':'')}>
                            <input className="input__field input__field--hoshi" type="password" name="password" value={ password } onChange={(e) =>{changeInput(e)}} />
                            <label className="input__label input__label--hoshi input__label--hoshi-color-1" htmlFor="password">
                                <span className="input__label-content input__label-content--hoshi">密码</span>
                            </label>
                        </span>
                    </Input>
                    <Input>
                        <span className={ 'input input--hoshi' + (repassword ? ' input--filled':'')}>
                            <input className="input__field input__field--hoshi" type="password" name="repassword" value={ repassword } onChange={(e) =>{changeInput(e)}} />
                            <label className="input__label input__label--hoshi input__label--hoshi-color-1" htmlFor="repassword">
                                <span className="input__label-content input__label-content--hoshi">确认密码</span>
                            </label>
                        </span>
                    </Input>
                    <Button className="button" type="primary" block onClick={() =>{provingRegiste(this.props)}} size="large">注册</Button>
                </div>
                    
            }else{
                htm = <div>
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
                    <Input>
                        <Checkbox className="checked" onChange={(e) =>{changeInput(e)}}>记住密码</Checkbox>
                        <Link className="login-forgot" to="/forgot" href="">忘记密码？</Link>
                    </Input>
                    <Button className="button" type="primary" block onClick={() =>{provingLogin(this.props)}} size="large">登录</Button>
                </div>
                    
            }
            return (
                <LoginBox>
                    <FromShow>
                        <LoginFrom>
                            <Tags>
                                <span className={registe ? '' : 'active'} onClick={() =>{changetype(false)}}>登录</span>
                                <span className={registe ? 'active' : ''} onClick={() =>{changetype(true)}}>注册</span>
                            </Tags>
                            {htm}
                        </LoginFrom>
                        <Welcome>
                            <h1>HD</h1>
                            <span>欢迎使用 HD</span>
                            <p>If you have any quert please enquire below.Our developer will help you soon.</p>
                            <Link className="home" to="/"><Icon type="home"></Icon></Link>
                        </Welcome>
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
        reaccount: state.getIn(['login', 'reaccount']),
        password: state.getIn(['login', 'password']),
        repassword: state.getIn(['login', 'repassword']),
        checked: state.getIn(['login', 'checked']),
        registe: state.getIn(['login', 'registe'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        provingLogin(props) {
            const account = props.account.trim();
            const password = props.password.trim();
            const remember = props.checked;
            const data = {account, password, remember};
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
            let value = target.type === 'checkbox' ? target.checked : target.value;
            dispatch(creaters.changeInput(name, value))
        },
        changetype(status){
            dispatch(creaters.changeType(status))
        },
        provingRegiste(props){
            const reaccount = props.reaccount.trim();
            const password = props.password.trim();
            const repassword = props.repassword.trim();
            const data = {reaccount, password, repassword}
            if(!reaccount){
                dispatch(creaters.changeMsg('error', '用户名不能为空！'));
                return;
            }
            if(!password){
                dispatch(creaters.changeMsg('error', '密码不能为空！'));
                return;
            }
            if(!repassword){
                dispatch(creaters.changeMsg('error', '确认密码不能为空！'));
                return;
            }
            if(password !== repassword){
                dispatch(creaters.changeMsg('error', '两次输入的密码不一致！'));
                return;
            }
            dispatch(creaters.checkRegiste(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);  