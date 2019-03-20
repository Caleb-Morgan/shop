import *as creaters from './actionType';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    scroll: false,
    hoverIndex: true
})

export default (state = defaultState, action) =>{
    switch(action.type){
        case creaters.CHANGESCROLL:
        return state.merge({
            scroll: action.status
        })
        case creaters.ONMOUSEHOVER:
        return state.merge({
            hoverIndex: action.index
        })
        default:
        return state;
    }
}