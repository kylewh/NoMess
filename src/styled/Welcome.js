import React from 'react'
import styled from 'styled-components'
import CheckCircle from 'material-ui/svg-icons/action/check-circle'
import Button from '../styled/Button'

const WelcomeDIV = styled.div`
  color: #03A9F4;
  box-sizing: border-box;
  width: 100%;
  padding: 15% 15% 10%;
  min-height: 120px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;
  & svg {
    height: 50px !important;
    width: 50px !important;
    fill: #8bc34a !important;
  }
`

const Welcome = ({isLogged, username, onLogoutClick}) => (
  <WelcomeDIV>
    <CheckCircle />
    <p>
      欢迎回来! {username}
      <br />
      <br />
      使用NoMess，立刻开始您的一天规划
    </p>
    <Button
      bigger
      logout
      label='退出登录'
      onTouchTap={(e) => {
        onLogoutClick()
      }}
    />
  </WelcomeDIV>
)

export default Welcome
