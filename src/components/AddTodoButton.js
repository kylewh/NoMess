import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import classNames from 'classnames'
import '../style/button.css'

const AddTodoButton = ({toggleAddToDo, isAdding}) => {
  const basestyle = {
    backgroundColor: '#ff5722',
    position: 'fixed',
    bottom: 84,
    right: 20,
    zIndex: 3
  }

  const className = classNames({
    'addTodo-btn': true,
    'bounce': !isAdding,
    'addTodo-btn-active': isAdding
  })

  return (
    <FloatingActionButton
      secondary
      style={basestyle}
      onClick={() => toggleAddToDo()}
      className={className}
      >
      <ContentAdd />
    </FloatingActionButton>
  )
}

export default AddTodoButton
