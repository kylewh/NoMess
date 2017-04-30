import React from 'react'
import { BottomNavigation } from 'material-ui/BottomNavigation'
import FilterLink from '../containers/FilterLink'
import BottomBarConatiner from '../styled/BottomBarContainer'

const BottomBar = () => (
  <BottomBarConatiner
    className={'todo-bottomBar'}
  >
    <BottomNavigation>
      <FilterLink filter='all' />
      <FilterLink filter='active' />
      <FilterLink filter='completed' />
    </BottomNavigation>
  </BottomBarConatiner>
)

export default BottomBar
