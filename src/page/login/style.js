import styled from 'styled-components';

export const LoginBox = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./bg.jpg');
`
export const LoginFrom = styled.div `
  max-width: 400px;
  height: 100%;
  padding: 2rem 4rem;
  margin-left: 3rem;
  background: rgb(27, 35, 48);
`
export const FromShow = styled.div `
  width:900px;
  height: auto;
  background: url('./bg.jpg');
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
    color: rgb(221, 22, 89);
  }
  span:nth-child(1):after{
    content: '|';
    margin-left: 1rem;
    color: rgb(55, 64, 73);
  }
  span{
    padding-right: 1rem;
    color: rgb(55, 64, 73);
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
export const Button = styled.div `
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
`

export const Logo = styled.div `
  width:50px;
  margin-bottom: 20px;
`