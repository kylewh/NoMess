import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Paper } from 'material-ui'
import { BottomNavigation } from 'material-ui/BottomNavigation'

import FilterLink from '../containers/FilterLink'

/* style decleration for bottomBar component  */
const bottomBarContainerStyle = {
  position: 'fixed',
  bottom: 0,
  zIndex: 1100,
  width: '100%',
  boxShadow: 'none',
  border: '0 none',
  overflow: 'hidden'
}

const bottomBarItemWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const BottomBar = () => {
  return (
    <Paper
      className={'todo-bottomBar'}
      style={bottomBarContainerStyle}
    >
      <BottomNavigation
        style={bottomBarItemWrapperStyle}
      >
        <FilterLink filter='all' />
        <FilterLink filter='active' />
        <FilterLink filter='completed' />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomBar
