import React from 'react'
import { IconButton } from 'material-ui'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import styled from 'styled-components'

const NavMenu = styled(NavigationMenu)`
  fill: #fff !important;
`

export default ({onClick}) => (
  <IconButton onClick={onClick} >
    <NavMenu />
  </IconButton>
)
