import { fromJS } from 'immutable';
import *as creaters from './actionType';

const defaultState = fromJS({
    Login: false,
    userList:[],
    msg: 'success',
    msgStr: ''
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
        default:
        return state;
    }
}