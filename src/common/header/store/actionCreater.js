import  *as creaters from './actionType';

export const changeScroll = (status) =>({
    type: creaters.CHANGESCROLL,
    status
})
export const onMouseHover = (index) =>({
    type: creaters.ONMOUSEHOVER,
    index
})