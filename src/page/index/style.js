import styled from 'styled-components';

export const ContentWrapper = styled.div`
`
export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: url('./bg.jpg');
    background-size: cover;
    background-position:center;
    height: calc(100vh - 64px);
    .bottom{
        position: absolute;
        left: 50%;
        margin-bottom: 2rem;
        transform: translateX(-50%);
        bottom: 0;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        text-align: center;
        cursor: pointer;
        &::after{
            content: '';
            position: absolute;
            transform: translateX(-50%) translateY(100%);
            left: 50%;
            bottom: 0;
            background: #fff;
            width: 3px;
            height: 100%;
        }
    }
`