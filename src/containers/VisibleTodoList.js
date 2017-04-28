import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import TodoList from '../components/TodoList'
import FetchError from '../components/FetchError'
import * as actions from '../actions'
import { getVisibleTodos, getErrorMessage, getIsFetching, getCurrentUser } from '../reducers'
import LinearProgress from 'material-ui/LinearProgress'
import '../style/visibleList.css'

class VisibleTodoList extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this.fetchData()
    }
  }

  fetchData () {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter).then(() => console.log('Data fetched'))
  }

  printDay (date) {
    const chineseDate = ['日', '一', '二', '三', '四', '五', '六']
    return '星期' + chineseDate[date.getDay()]
  }

  printOffsetDay (date) {
    var offsetOfDay = Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24))
    if (offsetOfDay > 0) {
      return offsetOfDay + '天后'
    } else if (offsetOfDay === 0) {
      return '今天'
    } else if (offsetOfDay < 0) {
      return Math.abs(offsetOfDay) + '天前'
    }
  }

  render () {
    const { todos, isLogged, ...rest } = this.props
    const keys = Object.keys(todos)
    //if ( !todos || !todos.length) return <div></div>
    return !isLogged ?
      (
        <div className={'scroller not-logged'}>
          Opps...seems you have to login.
        </div>
      ) :
      (
        <div
          className={'scroller'}
        >
          <CSSTransitionGroup
            component='div'
            className='todo-list-ct'
            transitionName='todo-list-ct'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={250}
          >
            {
            keys.map(key => {
              const dateInfo = {
                offsetDay: this.printOffsetDay(new Date(key)),
                date: key.slice(0, 10),
                day: this.printDay(new Date(key))
              }
              return (
                <TodoList
                  key={key}
                  dateInfo={dateInfo}
                  todosByDue={todos[key]}
                  {...rest}
                />
              )
            })
          }
          </CSSTransitionGroup>
        </div>
      )
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    errorMessage: getErrorMessage(state, filter),
    isFecthing: getIsFetching(state, filter),
    isLogged: getCurrentUser(state),
    filter
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList
