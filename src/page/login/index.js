import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, message
} from 'antd';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import { LoginBox, FromShow } from './style';
import *as creaters from './store/actionCreter';

class NormalLoginForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const { provingLogin, msg, msgStr, clearMsg, Login, loginstatus } = this.props;
        if (msg === "success" && msgStr) {
            message.success(msgStr, 3, loginstatus);
        } else if (msg === "waring" && msgStr) {
            message.warning(msgStr, 3, clearMsg);
        } else if (msg === "error" && msgStr) {
            message.error(msgStr, 3, clearMsg);
        }
        if (Login) {
            return (<Redirect to="/login"></Redirect>)
        } else {
            return (
                <LoginBox>
                    <FromShow>
                        <Form className="login-form">
                            <Form.Item>
                                {getFieldDecorator('account', {
                                    rules: [{ required: true, message: '请输入您的用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" autoFocus />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入您的密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )}
                                <Link className="login-form-forgot" to="/">忘记密码</Link>
                                <Button type="primary" htmlType="submit" onClick={() => { provingLogin(this) }} className="login-form-button">
                                    登录
                    </Button>
                                或 <Link to="/">免费注册!</Link>
                            </Form.Item>
                        </Form>
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
        msgStr: state.getIn(['login', 'msgStr'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        provingLogin(_this) {
            _this.props.form.validateFields((err, values) => {
                if (!err) {
                    dispatch(creaters.checkLogin(values))
                }
            });
        },
        clearMsg() {
            dispatch(creaters.changeMsg('succer', ''));
        },
        loginstatus() {
            dispatch(creaters.loginStatus(true))
        }
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);  