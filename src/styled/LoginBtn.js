import React from 'react'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton'

const LoginBtn = styled(({hide, ...rest}) => <FlatButton {...rest} />)`

  & span {
    color: #03A9F4 !important;
    font-weight: lighter !important;
    font-size: 16px !important;
  }
  display: ${props => props.hide === true
    ? 'none !important' : 'inline-block'
  };
`

export default LoginBtn
