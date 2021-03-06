import styled from 'styled-components';

export const LoginBox = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./bg.jpg');
  background-size:cover;
`
export const LoginFrom = styled.div `
  position:relative;
  max-width: 400px;
  height: 490px;
  padding: 3.5rem;
  background: #fff;
  z-index: 2;
  .button{
    margin-top: 1rem;
  }
  &::before{
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 99.92%;
    width: 25px;
    height: 0;
    border-bottom: 490px solid #fff;
    border-right: 100px solid transparent;
  }
`
export const FromShow = styled.div `
  width:900px;
  height: auto;
  background: transparent;
  background-repeat: no-repeat;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px #000;
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
`
export const Tags = styled.div `
  .active{
    color: #1890ff;
  }
  span:nth-child(1):after{
    content: '|';
    margin-left: 1rem;
    color: #595F6E;
  }
  span{
    padding-right: 1rem;
    color: #595F6E;
    font-size: 1.1rem;
    cursor: pointer;
  }
`

export const Input = styled.div `
  font-size: 1.5rem;
  .input {
    position: relative;
    z-index: 1;
    display: inline-block;
    max-width: 400px;
    width: 100%;
    vertical-align: top;
    background: transparent;
  }
  .checked{
    margin-bottom: 10px;
  }
  .checked span{
    font-size: 1rem;
    color: #595F6E;
  }
  .login-forgot{
    float:right;
    font-size: 1rem;
    margin-top: .5rem;
  }
  input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill {
    -webkit-text-fill-color: #ededed !important;
    -webkit-box-shadow: 0 0 0px 1000px transparent  inset !important;
      background-color:transparent;
      background-image: none;
      transition: background-color 50000s ease-in-out 0s; //背景色透明  生效时长  过渡效果  启用时延迟的时间
  }

  .input__field {
    position: relative;
    display: block;
    float: right;
    padding: 0.8em;
    width: 60%;
    border: none;
    border-radius: 0;
    background: #f0f0f0;
    color: #aaa;
    font-weight: bold;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-appearance: none; /* for box shadows to show on iOS */
  }

  .input__field:focus {
    outline: none;
  }

  .input__label {
    display: block;
    float: right;
    padding: 0 1em;
    width: 40%;
    color: #6a7989;
    font-weight: bold;
    font-size: 70.25%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .input__label-content {
    position: relative;
    display: block;
    padding: 1.6em 0;
    width: 100%;
  }
  .input--hoshi {
    overflow: hidden;
  }

  .input__field--hoshi {
    margin-top: 1em;
    padding: 0.85em 0.15em;
    width: 100%;
    background: transparent;
    color: #595F6E;
  }

  .input__label--hoshi {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 0.25em;
    width: 100%;
    height: calc(100% - 1em);
    text-align: left;
    pointer-events: none;
  }

  .input__label-content--hoshi {
    position: absolute;
  }

  .input__label--hoshi::before,
  .input__label--hoshi::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 10px);
    border-bottom: 1px solid #B9C1CA;
  }

  .input__label--hoshi::after {
    margin-top: 2px;
    border-bottom: 4px solid red;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }

  .input__label--hoshi-color-1::after {
    border-color: hsl(200, 100%, 50%);
  }

  .input__label--hoshi-color-2::after {
    border-color: hsl(160, 100%, 50%);
  }

  .input__label--hoshi-color-3::after {
    border-color: hsl(20, 100%, 50%);
  }

  .input__field--hoshi:focus + .input__label--hoshi::after,
  .input--filled .input__label--hoshi::after {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,
  .input--filled .input__label-content--hoshi {
    -webkit-animation: anim-1 0.3s forwards;
    animation: anim-1 0.3s forwards;
  }

  @-webkit-keyframes anim-1 {
    50% {
      opacity: 0;
      -webkit-transform: translate3d(1em, 0, 0);
      transform: translate3d(1em, 0, 0);
    }
    51% {
      opacity: 0;
      -webkit-transform: translate3d(-1em, -40%, 0);
      transform: translate3d(-1em, -40%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate3d(0, -40%, 0);
      transform: translate3d(0, -40%, 0);
    }
  }

  @keyframes anim-1 {
    50% {
      opacity: 0;
      -webkit-transform: translate3d(1em, 0, 0);
      transform: translate3d(1em, 0, 0);
    }
    51% {
      opacity: 0;
      -webkit-transform: translate3d(-1em, -40%, 0);
      transform: translate3d(-1em, -40%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate3d(0, -40%, 0);
      transform: translate3d(0, -40%, 0);
    }
  }
`
/* export const Button = styled.div `
    background: rgb(38, 49, 59);
    position:relative;
    margin-top: 1em;
    padding: 0.85em 0.15em;
    width: 100%;
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &::after{
      content: "";
      width:100%;
      height:3px;
      background:#1890ff;
      position:absolute;
      bottom:0%;
      left:0%;
      transition:all .8s;
    }
    &:active:after{
      left:50%; 
      width:0;
    }
` */

export const Logo = styled.div `
  width:50px;
  margin-bottom: 20px;
`

export const Welcome = styled.div`
  text-align: right;
  background: #ccdef7;
  width: 500px;
  height: 25rem;
  margin: 1rem 4rem 0 0;
  padding: 3rem 4rem 0 3rem;
  box-shadow: 2px 2px 10px 4px #403d3d;
  border-radius: 5px;
  h1{
    font-size: 3rem;
    margin-bottom: 0;
    font-weight: bold;
  }
  span{
    font-size: 1.5rem;
  }
  p{
    margin-bottom: 2rem;
  }
  .home{
    display: inline-block;
    width: 60px;
    height: 60px;
    background: #1890ff;
    padding: 1rem;
    color: #fff;
    font-size: 1.5rem;
    line-height: 1rem;
    border-radius: 30px;
    text-align: center;
  }
`