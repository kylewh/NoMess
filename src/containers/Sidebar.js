import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Account from 'material-ui/svg-icons/social/person'
import MainList from 'material-ui/svg-icons/action/assignment'
import Face from 'material-ui/svg-icons/action/face'
import FontIcon from 'material-ui/FontIcon'
import NormalLink from '../styled/NormalLink'
import { getIsSidebarOpen, getCurrentUser } from '../reducers'
import * as actions from '../actions'

const Sidebar = ({isSidebarOpen, toggleSideBar, isLogged}) => {
  return (
    <div className='todo-sidebar'>
      <Drawer
        docked={false}
        width={220}
        open={isSidebarOpen}
        onRequestChange={toggleSideBar}
        containerStyle={{
          height: 'calc( 100% - 60px )',
          top: 60,
          zIndex: 800,
          boxShadow: '2px 2px 4px rgba(0,0,0,0.15)',
          textAlign: 'center'
        }}
        overlayStyle={{
          zIndex: 800,
          backgroundColor: 'transparent'
        }}
      >
        <NavLink
          to={'login'}
          style={{
            textDecoration: 'none'
          }}
        >
          <MenuItem
            primaryText={isLogged ? isLogged.attributes.username : '登录'}
            leftIcon={<Account />}
            onClick={toggleSideBar}
          />
        </NavLink>
        <NavLink
          to={'all'}
          style={{
            textDecoration: 'none'
          }}
        >
          <MenuItem
            primaryText={isLogged ? '全部事项' : '全部事项(请先登录)'}
            leftIcon={<MainList />}
            onClick={toggleSideBar}
           />
        </NavLink>
        <NormalLink
          href='https://github.com/kylewh/NoMess'
          target='_blank'
        >
          <MenuItem
            primaryText={'Github'}
            style={{color: '#3f51b5'}}
            leftIcon={
              <i 
                className="fa fa-github"
                aria-hidden="true"
                style={{
                  fontSize: 24,
                  marginLeft: 12,
                  color: '#3f51b5'
                }}
              >
            </i>}
            onClick={toggleSideBar}
          />
        </NormalLink>
        <NormalLink
          href='https://kylewh.github.io/'
          target='_blank'
        >
          <MenuItem
            primaryText={'Author\'s Blog'}
            style={{color: '#E91E63'}}
            leftIcon={<Face style={{fill: '#E91E63'}} />}
            onClick={toggleSideBar}
          />
        </NormalLink>
      </Drawer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isSidebarOpen: getIsSidebarOpen(state),
  isLogged: getCurrentUser(state)
})

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(Sidebar)
)
