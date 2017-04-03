import { combineReducers } from 'redux'
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../actions'

function ascii(state = {}, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        products: action.products,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

// const rootReducer = combineReducers({ascii})

export default ascii
