import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { login, logOut } from '../actions'
import { getIsLogging, getLogError, getCurrentUser } from '../reducers'
// import { getCurrentUser } from '../api'
import { Redirect } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import '../style/login.css'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import CheckCircle from 'material-ui/svg-icons/action/check-circle'

const welcomInterface = (userInfo, onLogoutClick) => {
  return (
    <div className='welcome'>
      <CheckCircle />
      <p>
        欢迎回来!                      {userInfo.attributes.username}
        <br />
        <br />
        使用NoMess，立刻开始您的一天规划
      </p>
      <FlatButton
        className='sign-out-btn'
        label='退出登录'
        onTouchTap={(e) => {
          onLogoutClick()
          console.log(userInfo)
        }}
      />
    </div>
  )
}

class Login extends Component {
  constructor (props) {
    super(props)
  }

  errorMsgTranslator (err) {
    switch (err.code) {
      case 211:
        return '无法找到该用户'
      case 219:
        return '失败次数超过限制,稍后再试'
      default:
        return 'Oops..出错了！'
    }
  }

  render () {
    const { onLoginClick, isLogging, loginError, onLogoutClick, isLogged } = this.props
    console.log(isLogged)

    return !isLogged ? (
      <div className='todo-login-ct'>
        {/** <img src="http://om8hmotom.bkt.clouddn.com/loginback.jpg" alt="" width='1000px;'/>**/}
        <form
          className={classNames({
            'login': true,
            'logging': isLogging
          })}
          autoComplete='false'
          >
          {/** <div className="login-indicator">
              <div></div>
              <div></div>
              <div></div>
              <span>Logging...</span>
            </div>**/}
          <span
            className={classNames({
              'title': true,
              'error': loginError
            })}
            >
            { loginError ? this.errorMsgTranslator(loginError) : 'Welcome'}
          </span>
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
          <RefreshIndicator
            size={40}
            left={135}
            top={240}
            status={'loading'}
            style={{
              display: isLogging ? 'inline-block' : 'none'
            }}
            />
          <FlatButton
            className='sign-in-btn'
            label='登录'
            ref={node => this.submitBtn = node}
            onTouchTap={(e) => {
              onLoginClick(
                  this.usnInput.input.value,
                  this.pswInput.input.value
                )
            }}
            />
        </form>
      </div>
      )
      : (
        <div className='todo-login-ct'>
          <div className={'login'}>
            { welcomInterface(isLogged, onLogoutClick) }
          </div>
        </div>
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
