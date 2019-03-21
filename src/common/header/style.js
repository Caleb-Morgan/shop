import styled from 'styled-components';

export const HeaderBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(70, 68, 66);
    height: 64px;
    z-index: 2;
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
                    position: relative;
                    height: 100%;
                    padding: 0 .5rem;
                }   
                &.user-menu:hover{
                    background: #fff;
                }
                &.user-menu:hover>a{
                    color: #666;
                }
                >a{
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
export const ShopWrapper = styled.div`
    position: absolute;
    display: none;
    top: 100%;
    right: 0;
    width: 100%;
    min-width:350px;
    background:#fff;
    padding: 1rem;
    border: 1px solid #eee;
    box-shadow: 2px 2px 7px 1px #eee;
    &.active{
        display: initial;
    }
    .ant-spin-container{
        height: 300px;
        margin: 1rem 0;
        overflow: auto;
    }
    .ant-list-item-meta-title a{
        color:rgba(0, 0, 0, 0.45);
    }
`
export const ShopContent = styled.div`
    display: flex;
    .left{
        width: 60%;
        padding-right: 1rem;
        font-size: .8rem;
    }
    .right{
        .del{
            width: 100%;
            display:inline-block;
            cursor: pointer;
            margin-top: .5rem;
            text-align: right;
        }
    }
`

export const ShopFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .ant-btn{
        background: #9A8E87;
        color: #fff;
        border: none;
        border-radius: 0;
        &:hover{
            background: #5D524C;
            color: #fff;
            border: none;
        }
    }
    
`