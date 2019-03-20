import { combineReducers } from 'redux-immutable';
//import index from '../page/index/store';
import login from '../page/login/store';
import header from '../common/header/store';

export default combineReducers({
    //index,
    login: login,
    header: header
})