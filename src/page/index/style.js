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
    max-width: 1140px;
    padding: 0 8px;
    margin: 3rem 1rem;
    &.container{
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto
    }
    @media (min-width: 576px) {
        &.container {
            max-width:540px
        }
    }

    @media (min-width: 768px) {
        &.container {
            max-width:720px
        }
    }

    @media (min-width: 992px) {
        &.container {
            max-width:960px
        }
    }

    @media (min-width: 1200px) {
        &.container {
            max-width:1140px
        }
    }
    .ant-row{
        margin-bottom: 40px;
    }
    img{
        width: 100%;
    }
    a{
        position: relative;
        display: inline-block;
        overflow: hidden;
        .hover{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            text-align: center;
            transform: translateY(100%);
            transition: 0.3s ease-in-out;
            h3{
            line-height: 1rem;
            color: #fff;
            font-weight: bold;
            }
        }
        &:hover .hover{
            transform: translateY(0);
        }
        &:hover::before{
            transform: translateY(0);
        }
        &::before{
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