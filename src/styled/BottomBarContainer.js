import styled from 'styled-components'
import { Paper } from 'material-ui'

const BottomBarConatiner = styled(Paper)`
  position: fixed !important;
  bottom: 0 !important;
  zIndex: 1100 !important;
  width: 100% !important;
  boxShadow: none !important;
  border: 0 none !important;
  overflow: hidden !important;
  &>div {
    display: flex !important;
    justify-content: space-around !important;
  }
`

export default BottomBarConatiner
