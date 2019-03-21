import *as creaters from './actionType';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    scroll: false,
    hoverIndex: true,
    shopList: [
        {"name": 'XX', "pice": 'XX', "Introduction": '图像无法显示时的替代文本图像无法显示时的替代文本'},
        {"name": 'XX', "pice": 'XX', "Introduction": '图像无法显示时的替代文本图像无法显示时的替代文本'},
        {"name": 'XX', "pice": 'XX', "Introduction": '图像无法显示时的替代文本图像无法显示时的替代文本'},
        {"name": 'XX', "pice": 'XX', "Introduction": '图像无法显示时的替代文本图像无法显示时的替代文本'},
        {"name": 'XX', "pice": 'XX', "Introduction": '图像无法显示时的替代文本图像无法显示时的替代文本'},
        {"name": 'XX1', "pice": 'XX', "Introduction": '图像无法显示时的替代文本图像无法显示时的替代文本'}
    ],
    shopShow: false
})

export default (state = defaultState, action) =>{
    switch(action.type){
        case creaters.CHANGESCROLL:
        return state.merge({
            scroll: action.status
        })
        case creaters.ONMOUSEHOVER:
        return state.merge({
            [action.tp]: action.index
        })
        default:
        return state;
    }
}