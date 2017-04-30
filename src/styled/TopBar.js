import styled from 'styled-components'
import { IconMenu, MenuItem, IconButton, FlatButton } from 'material-ui'
import * as fromMaterial from 'material-ui'

const TopBar = styled(fromMaterial.AppBar)`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  height: 60px !important;
  & h1 {
    font-weight: 100 !important;
    font-size: 20px !important;
    text-align: center !important;
  }
`

export default TopBar
