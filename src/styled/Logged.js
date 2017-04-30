import React from 'react'
import styled from 'styled-components'
import { IconMenu, MenuItem, IconButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const MoreIcon = styled(MoreVertIcon)`
  fill: #fff !important;
`

const Logged = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreIcon /></IconButton>
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

export default Logged
