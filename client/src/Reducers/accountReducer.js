export default (state = {}, action) => {
  switch (action.type) {
    case 'ACCOUNT_CREATED':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
