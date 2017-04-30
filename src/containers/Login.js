import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logOut } from '../actions'
import { getIsLogging, getLogError, getCurrentUser } from '../reducers'
import TextField from 'material-ui/TextField'
import Overlay from '../styled/Overlay'
import LoginForm from '../styled/LoginForm'
import LoginInfo from '../styled/LoginInfo'
import Button from '../styled/Button'
import Welcome from '../styled/Welcome'
import LoginIndicator from '../styled/LoginIndicator'

class Login extends Component {
  errorMsgTranslator (err) {
    switch (err.code) {
      case -1:
        return '您的网络貌似断线了 T_T'
      case 202:
        return '用户名已被占用'
      case 210:
        return '密码错误'
      case 219:
        return '失败次数超过限制,稍后再试'
      default:
        return 'Oops..出错了！'
    }
  }

  componentDidMount () {
    console.log('login loaded')
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.isLogged !== nextProps.isLogged) {
      this.props.history.push('/')
    }
  }

  render () {
    const { onLoginClick, isLogging, loginError, onLogoutClick, isLogged } = this.props
    return !isLogged ? (
      <Overlay login>
        <LoginForm>
          <LoginInfo error={loginError}>
            { loginError ? this.errorMsgTranslator(loginError) : 'Welcome'}
          </LoginInfo>
          <TextField
            floatingLabelText='UserName'
            className='username'
            autoComplete='off'
            ref={node => this.usnInput = node}
            />
          <br />
          <TextField
            floatingLabelText='Password'
            type='password'
            className='password'
            autoComplete='off'
            ref={node => this.pswInput = node}
            />
          <br />
          <LoginIndicator
            size={40}
            left={135}
            top={240}
            status={'loading'}
            hide={!isLogging}
            />
          <Button login bigger label='登录'
            hide={isLogging}
            innerRef={node => this.submitBtn = node}
            onTouchTap={(e) => {
              onLoginClick(
                  this.usnInput.input.value,
                  this.pswInput.input.value
                )
            }}
          />
        </LoginForm>
      </Overlay>
      )
      : (
        <Overlay login>
          <LoginForm>
            <Welcome
              isLogged={isLogged}
              username={isLogged.attributes.username}
              onLogoutClick={onLogoutClick}
            />
          </LoginForm>
        </Overlay>
      )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLoginClick (username, password) {
    dispatch(login(username, password))
  },
  onLogoutClick () {
    dispatch(logOut())
  }
})

const mapStateToProps = (state) => ({
  isLogging: getIsLogging(state),
  loginError: getLogError(state),
  isLogged: getCurrentUser(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
