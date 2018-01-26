export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
