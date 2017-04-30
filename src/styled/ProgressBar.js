import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import styled from 'styled-components'

const ProgressBar = styled(({hide, ...rest}) => <LinearProgress {...rest} />)`
  height: 1px !important;
  backgroundColor: #FFEB3B !important;
  zIndex: 1200!important;
  display: ${props => props.hide === false
    ? 'none!important' : 'block!important'};
`

export default ProgressBar
