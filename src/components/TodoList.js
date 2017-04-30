import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Todo from './Todo'
import TimeInfo from '../styled/TimeInfo'
import List from '../styled/List'

const TodoList = ({ dateInfo, todosByDue, toggleTodo, editTodo, deleteTodo }) => {
  return (
    <CSSTransitionGroup
      component={List}
      className='todo-list'
      transitionName='add-remove-item'
      transitionEnterTimeout={250}
      transitionLeaveTimeout={250}
    >
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
        )
      }
    </CSSTransitionGroup>
  )
}

export default TodoList
