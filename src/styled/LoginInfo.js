import styled, { keyframes, css } from 'styled-components'

const pulse = keyframes`
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`

const error = css`
  color: #f44336;
  -webkit-animation: 1s ease-in pulse;
  animation: 1s ease-in ${pulse};
  font-size: 14px;
  line-height: 1.7rem;
`

const LoginInfo = styled.span`
  display: block;
  padding: 30px 0px 15px 0px;
  font-size: 1.2rem;
  color: #03A9F4;
  ${props => !!props.error === true
    ? error : ''
  }
`

export default LoginInfo
