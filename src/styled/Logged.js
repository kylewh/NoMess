import React from 'react'
import styled from 'styled-components'
import { IconMenu, MenuItem, IconButton } from 'material-ui'
import { FlatButton } from 'material-ui'
import Account from 'material-ui/svg-icons/action/account-circle'

const MyAccount = styled(Account)`
  fill: #fff !important;
`

const Logged = ({username, ...rest}) => (
  <FlatButton
    {...rest}
    label={username}
    icon={<Account />}
  />
)

Logged.muiName = 'FlatButton'

export default Logged
