import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import AddTodoButton from '../components/AddTodoButton'
import AddTodoPanel from '../components/AddTodoPanel'
import { getIsAdding } from '../reducers'
import * as actions from '../actions'
import '../style/panel.css'

class AddTodo extends Component {
  render () {
    const { isAdding, toggleAddToDo, addTodo, fetchTodos } = this.props
    return (
      <div className='todo-add'>
        <AddTodoButton
          isAdding={isAdding}
          toggleAddToDo={toggleAddToDo}
        />
        <CSSTransitionGroup
          transitionName='addTodo-panel'
          transitionEnterTimeout={250}
          transitionLeaveTimeout={300}
        >
          { isAdding &&
            <AddTodoPanel
              fetchTodos={fetchTodos}
              addTodo={addTodo}
            /> }
        </CSSTransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAdding: getIsAdding(state)
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(AddTodo))
