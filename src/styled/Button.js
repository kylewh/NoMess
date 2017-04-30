import React from 'react'
import styled from 'styled-components';
import styledProps from 'styled-props';
import FlatButton from 'material-ui/FlatButton'

const margin = {
  default: 0,
  login: '30px 0 0 0',
  logout: '25px 0 0 0',
}

const color = {
  deafult: '#424242',
  login: '#03A9F4',
  logout: '#FF5B45',
}

const fontSize = {
  default: 16,
  bigger: 18,
}

const Button = styled(
  ({hide, login, bigger, logout, ...rest}) => 
  <FlatButton {...rest} />)
  `
  margin: ${styledProps(margin)} !important;
  & span {
    color: ${styledProps(color)} !important;
    font-weight: lighter !important;
    font-size: ${styledProps(fontSize)}px !important;
  }
  display: ${props => props.hide === true ?
    'none !important' : 'inline-block'
  };
  `

export default Button;
