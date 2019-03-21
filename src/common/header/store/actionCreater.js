import  *as creaters from './actionType';

export const changeScroll = (status) =>({
    type: creaters.CHANGESCROLL,
    status
})
export const onMouseHover = (tp, index) =>({
    type: creaters.ONMOUSEHOVER,
    tp,
    index
})