import React from 'react'
import styled, { css } from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const active = css`
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #f44336 !important;
`

const FloatBtn = styled(({active, ...rest}) =><FloatingActionButton {...rest} />)`
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transition: all 0.3s !important;
  transition: all 0.3s !important;
  position: fixed !important;
  bottom: 84px !important;
  right: 20px !important;
  z-index: 100;
  & button {
    ${props => props.active === true ?
      active : ''
    }
  }
`

const AddTodoButton = ({toggleAddToDo, isAdding}) => (
  <FloatBtn
    secondary
    active={isAdding}
    onClick={() => toggleAddToDo()}
    >
    <ContentAdd />
  </FloatBtn>
)

export default AddTodoButton
