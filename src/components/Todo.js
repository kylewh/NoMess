import React, { Component } from 'react'
import { debounce } from 'underscore'
import classNames from 'classnames'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import Delete from 'material-ui/svg-icons/content/clear'
import '../style/todo.css'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.handleOnChange = debounce(this.props.handleOnChange, 500)
  }

  render () {
    const {
      isToday,
      handleOnCheck,
      completed,
      handleDelete,
      text,
      name
    } = this.props

    return (
      <li className={'todo-item'}>
        <Checkbox
          defaultChecked={completed}
          className={'check-box'}
          onCheck={handleOnCheck}
          style={{
            display: 'block',
            width: 24
          }}
        />
        <TextField
          name={name}
          defaultValue={text}
          fullWidth
          underlineStyle={{borderColor: 'transparent'}}
          underlineDisabledStyle={{border: 'none'}}
          disabled={completed}
          multiLine
          onChange={() => {
            this.handleOnChange(this.input.getValue())
          }}
          ref={ node => this.input = node}
          className={classNames({
            'todo-item-text': true,
            'completed': completed,
            'today': isToday
          })}
        />
        <a>
          <Delete
            className={'todo-item-delete'}
            hoverColor={'#ff5722'}
            style={{
              display: 'inline',
              width: 18,
              height: 18
            }}
            onClick={handleDelete}
          />
        </a>
      </li>
    )
  }
}

export default Todo
