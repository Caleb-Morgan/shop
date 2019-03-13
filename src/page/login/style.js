import styled from 'styled-components';

export const LoginBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  .ant-input{
    border-radius: 0;
    border:none;
    border-bottom: 1px solid #eee;
  }
  .ant-input:focus{
    border: none;
    box-shadow: none;
  }
  .login-form {
    max-width: 300px;
    height: 100%;
    padding: 100px 20px 20px 20px;
    background: #fff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
`
export const FromShow = styled.div`
  width:800px;
  height: 500px;
  background: url('./bg.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #ccc;
`