import React from 'react'
import styled from 'styled-components'
import TextField from 'material-ui/TextField'

const TodoText = styled(({redText, lineThrough, ...rest}) => <TextField {...rest} />)`
  font-size: 16px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  color: #424242;
  &.completed textarea {
    color: ${props => props.lineThrough === true
      ? '#BDBDBD !important' : '#757575 !important'
    };
    text-decoration: ${props => props.lineThrough === true
      ? 'line-through !important' : 'none'
    }
  };
  &.today textarea {
    color: ${props => props.redText === true
      ? '#ec9494 !important' : '#757575 !important'
    };
  };
  & textarea:focus {
    font-weight: 400 !important;
  }
`

export default TodoText
