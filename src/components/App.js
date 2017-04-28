import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { getCurrentUser } from '../reducers'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import BottomBar from './BottomBar'

const App = ({ isLogged }) => {
  return isLogged ? 
    (
      <div className='todo-main'>
        <AddTodo />
        <VisibleTodoList />
        <BottomBar />
      </div>
    ) : (
      <Redirect to="/login"/>
    )
}

const mapStateToProps = (state) => ({
  isLogged: getCurrentUser(state)
})

export default connect(mapStateToProps)(App)
