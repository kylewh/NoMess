import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../actions'
import { getIsFetching, getCurrentUser } from '../reducers'
import LinearProgress from 'material-ui/LinearProgress'
import { AppBar, IconMenu, MenuItem, IconButton, FlatButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

const Login = (props) => {
  return (
    <FlatButton {...props} label='Login' />
  )
}

Login.muiName = 'FlatButton'

const Logged = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText='Refresh' />
    <MenuItem primaryText='Help' />
    <MenuItem primaryText='Sign out' />
  </IconMenu>
)

Logged.muiName = 'IconMenu'

const TodoAppBar = ({toggleSideBar, isFetching, isLogged}) => {
  console.log(isFetching)
  return (
    <div className={'todo-appbar'}>
      {isFetching
        ? (<LinearProgress
          mode='indeterminate'
          style={{
            height: 1,
            backgroundColor: '#FFEB3B',
            zIndex: 1200
          }}
        />) : ''
      }
      <AppBar
        title={'Say no to mess'}
        style={{
          position: 'fixed',
          top: 0,
          left: 0
        }}
        titleStyle={{
          fontWeight: 100,
          fontSize: 20,
          textAlign: 'center'
        }}
        iconElementLeft={
          <IconButton
            onClick={toggleSideBar}
          >
            <NavigationMenu />
          </IconButton>
        }
        iconElementRight={isLogged ? <Logged /> : <Login />}
      />
    </div>
  )
}

const mapStateToProps = (state, { match }) => ({
  isFetching: getIsFetching(state, match.params.filter || 'all'),
  isLogged: getCurrentUser(state)
})

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(TodoAppBar))
