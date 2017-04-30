import React from 'react'
import styled from 'styled-components'
import Delete from 'material-ui/svg-icons/content/clear'

const A = styled.a`
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  padding: 12px;
  -ms-flex-line-pack: center;
  align-content: center;
  border-radius: 50%;
  &:active {
    background-color: #f5f5f5;
  }
  @media all and (min-width:640px) {
    & .delete {
      display: none !important;
    }
  }
`

const DeleteIcon = styled(Delete)`
  display: inline-block !important;
  fill: #f44336 !important;
  -webkit-transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms !important;
  transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms !important;
  align-self: center;
  width: 18 !important;
  height: 18 !important;
  &:hover {
    color: #ff5722 !important;
  }
`

const DeleteBtn = ({onClick}) => (
  <A>
    <DeleteIcon
      className={'delete'}
      onClick={onClick}
    />
  </A>
)

export default DeleteBtn
