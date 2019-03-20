import styled from 'styled-components';

export const HeaderBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(70, 68, 66);
    height: 64px;
    .logo{
        display:flex;
        padding: .95rem 1rem;
    }
    .white-brand, .brown-brand{
        display: none;
        height: 34px;
    }
    .show{
        display: inherit;
    }
    .menu-header{
        height: 100%;
        display: flex;
        ul{
            width: 100%;
            display:flex;
            align-items: center;
            justify-content: center;
            padding:0;
            margin: 0;
            li{
                position: relative;
                list-style: none;
                display: flex;
                align-items: center;
                margin: 0 1rem;
                line-height: 1rem;
                &.user-menu{
                    height: 100%;
                    padding: 0 .5rem;
                }   
                &.user-menu:hover{
                    background: #9A8E87;
                }
                a{
                    font-size: 1rem;
                    color: #fff;
                    padding: .5rem 1rem;
                    font-weight: 900;
                    .fade-enter {
                        opacity: 0.01;
                        bottom: 30%;
                    }
                    .fade-enter-active {
                        opacity: 1;
                        bottom: 0;
                        transition: all .3s ease-out;
                    }
                    .fade-enter-done {
                        bottom: 0;
                    }
                    .fade-exit {
                        opacity: 1;
                        bottom: 0;
                    }
                    .fade-exit-active {
                        opacity: 1;
                        bottom: 30%;
                        transition: all .3s ease-in;
                    }
                    .border{
                        background: #9A8E87;
                        position: absolute;
                        left: 0;
                        width: 100%;
                        height: 3px;
                        opacity: 1;
                        opacity: 0;
                        &.active{
                            opacity: 1;
                        }
                    }
                }
            }
            
        }
    }
    .icon{
        font-size: 1.5rem;
        font-weight: normal;
    }
`