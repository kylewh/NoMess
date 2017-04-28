import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Account from 'material-ui/svg-icons/social/person'
import MainList from 'material-ui/svg-icons/action/assignment'
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
          boxShadow: '2px 2px 4px rgba(0,0,0,0.15)'
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
            style={{}}
            primaryText={isLogged ? isLogged.attributes.username : '登录'}
            leftIcon={<Account />}
          />
        </NavLink>
        <NavLink
          to={'all'}
          style={{
            textDecoration: 'none'
          }}
        >
          <MenuItem
            primaryText='全部事项'
            leftIcon={<MainList />}
           />
        </NavLink>
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
