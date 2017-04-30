import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const BottomNavLink = styled(NavLink)`
  &.btn-active svg {
  fill: rgb(0, 176, 255) !important;
  }

  &.btn-active div {
    color: rgb(0, 176, 255) !important;
  }
`

export default BottomNavLink
