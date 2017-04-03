import { combineReducers } from 'redux'
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../actions'

function products(state = {
  isFetching: false,
  products: [],
  page: 0
}, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        products: state.products.concat(action.products),
        page: state.page + 1,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

// const rootReducer = combineReducers({products})

export default products
