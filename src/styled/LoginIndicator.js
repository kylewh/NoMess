import React from 'react'
import styled from 'styled-components'
import RefreshIndicator from 'material-ui/RefreshIndicator'

const LoginIndicator = styled(({hide, ...test}) =>
  <RefreshIndicator {...test} />
)`
  display: ${props => props.hide === true
    ? 'none !important' : 'inline-block'
  };
`

export default LoginIndicator
