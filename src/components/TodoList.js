import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Todo from './Todo'
import classNames from 'classnames'
import '../style/todoList.css'


/**
 * styled-components
 */

import TimeInfo from '../styled/TimeInfo'

const TodoList = ({ dateInfo, todosByDue, toggleTodo, editTodo, deleteTodo }) => {
  const timeClass = classNames({
    'time-info': true,
    'today': dateInfo.offsetDay === '今天'
  })
  return (
    <CSSTransitionGroup
      component='ul'
      className='todo-list'
      transitionName='add-remove-item'
      transitionEnterTimeout={250}
      transitionLeaveTimeout={250}
    >
      {/**<li className={timeClass}>
        <em>{dateInfo.offsetDay}</em>
        <span>{dateInfo.date} {dateInfo.day}</span>
      </li>**/}
      <TimeInfo today={dateInfo.offsetDay === '今天'} >
        <em>{dateInfo.offsetDay}</em>
        <span>{dateInfo.date} {dateInfo.day}</span>
      </TimeInfo>
      {todosByDue.map(todo =>
        <Todo
          isToday={dateInfo.offsetDay === '今天'}
          key={todo.id}
          name={todo.id}
          {...todo}
          handleOnCheck={() => toggleTodo(todo.id)}
          handleDelete={() => deleteTodo(todo.id)}
          handleOnChange={editTodo.bind(null, todo.id)}
        />
      )}
    </CSSTransitionGroup>
  )
}

export default TodoList
