import *as creaters from './actionType';
import axios from 'axios';
import { fromJS } from 'immutable'

export const changeMsg = (msg, msgStr) =>({
    type: creaters.CHANGEMESSAGE,
    msg,
    msgStr
})

export const loginStatus = (status) =>({
    type: creaters.LOGINSTATUS,
    status
})
export const userMsg = (data) =>({
    type: creaters.USERMSG,
    data
})

export const checkLogin = () =>{
    return (dispatch) =>{
        axios.get('/api/user.json')
        .then((res) =>{
            if(res.data.status){
                dispatch(changeMsg('success', '登录成功！'));
                const data = res.data.data;
                dispatch(userMsg(fromJS(data)));
            }else{
                dispatch(changeMsg('error', '用户名或密码不正确！'))
            }

        })
        .catch((err) =>{
            console.error(err);
        })
    }
}