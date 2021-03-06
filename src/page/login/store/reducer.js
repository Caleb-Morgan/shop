import { fromJS } from 'immutable';
import *as creaters from './actionType';

const defaultState = fromJS({
    Login: false,
    userList:[],
    msg: 'success',
    msgStr: '',
    account: '',
    password: '',
    checked: false,
    reaccount: '',
    repassword: '',
    registe: false,
})

export default (state = defaultState, action) =>{
    switch(action.type){
        case creaters.LOGINSTATUS:
        return state.merge({
            Login: action.status,
            msg: '',
            msgStr: ''
        });
        case creaters.USERMSG:
        return state.merge({
            userList: action.data
        });
        case creaters.CHANGEMESSAGE:
        return state.merge({
            msg: action.msg,
            msgStr: action.msgStr
        })
        case creaters.CHANGEINPUT:
        let ele = action.ele;
        return state.merge({
            [ele]: action.value,
            msg: '',
            msgStr: ''
        })
        case creaters.CHANGETYPE:
        return state.set('registe', action.status);
        default:
        return state;
    }
}