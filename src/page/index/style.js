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
export const Content = styled.div`
    padding: 0 8px;
    margin: 3rem 1rem;
    img{
        width: 100%;
    }
    a{
        position: relative;
        display: inline-block;
        overflow: hidden;
        &:hover::after{
            transform: translateY(0);
        }
        &::after{
            content: '';
            position: absolute;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
            transform: translateY(50%);
            transition: 0.3s ease-in-out;
            background: linear-gradient(to bottom, rgba(154,142,135,0) 0%, rgba(133,133,133,0.5) 100%);
        }
    }
`