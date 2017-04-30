import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`
const LoginForm = styled.form`
  font-family: "Helvetica Neue", "Arial", " Segoe UI", "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif !important;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 290px;
  height: 310px;
  padding: 0px 10px;
  margin: auto;
  background: white;
  border-radius: 2px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 900;
  &::after {
    content: '如果未注册账号，点击登录会为您自动创建哦';
    display: inline-block;
    font-size: 12px;
    color: white;
    font-weight: lighter;
    background-color: transparent;
    position: absolute;
    left: 30px;
    bottom: -30px;
    border-radius: 5px;
    -webkit-animation: 1s ease-in ${fadeInUp};
    animation: 1s ease-in ${fadeInUp};
  }
  & input:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0px 9999px white !important;
  }
`

export default LoginForm
