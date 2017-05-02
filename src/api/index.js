import AV from 'leancloud-storage/dist/av'
/**
 * Will refractor it to a public interface
 */
export const initLeanCloud = () => {
  AV.initialize()
  const appId = 'fHlQK5K3zQdGFO0h4jPg7Azk-gzGzoHsz'
  const appKey = 'Tpz60WuMnnBGJGh3hr6os321'
  AV.init({ appId, appKey })
}

export const fetchTodos = (filter) => {
  const query = new AV.Query('Todos')
  switch (filter) {
    case 'all':
      return query.ascending('due')
        .equalTo('owner', AV.User.current())
        .find()
    case 'active':
      return query.ascending('due')
        .equalTo('completed', false)
        .equalTo('owner', AV.User.current())
        .find()
    case 'completed':
      return query.ascending('due')
        .equalTo('completed', true)
        .equalTo('owner', AV.User.current())
        .find()
    default:
      throw new Error(`Unknown Filter: ${filter}`)
  }
}

export const addTodo = (text, due) => {
  if (!AV.User.current()) {
    throw new Error('You have to login')
  }
  const Todos = AV.Object.extend('Todos')
  const todo = new Todos()
  todo.set('text', text)
  todo.set('completed', false)
  todo.set('due', due)
  todo.set('owner', AV.User.current())
  return todo.save()
}

export const editTodo = (id, text) => {
  const query = new AV.Query('Todos')
  return query.get(id).then(function (oldTodo) {
    const updatedTodo = AV.Object.createWithoutData('Todos', id)
    updatedTodo.set({
      completed: oldTodo.attributes.completed,
      text,
      due: oldTodo.attributes.due
    })
    return updatedTodo.save()
  }, function (error) {
    throw new Error(error)
  })
}

export const toggleTodo = (id) => {
  const query = new AV.Query('Todos')
  return query.get(id).then(function (oldTodo) {
    const updatedTodo = AV.Object.createWithoutData('Todos', id)
    updatedTodo.set({
      completed: !oldTodo.attributes.completed,
      text: oldTodo.attributes.text,
      due: oldTodo.attributes.due
    })
    return updatedTodo.save()
  }, function (error) {})
}

export const deleteTodo = (id) => {
  return AV.Query.doCloudQuery(`delete from Todos where objectId="${id}"`)
    .then(function (res) {
      return res
    }, function (error) {
      throw new Error(error)
    })
}

export const signUp = (username, password) => {
  const newUser = new AV.User()
  newUser.setUsername(username)
  newUser.setPassword(password)
  return newUser.signUp()
}

export const login = (username, password) => {
  return AV.User.logIn(username, password)
}

export const getCurrentUser = () => AV.User.current()

export const logOut = () => AV.User.logOut()
