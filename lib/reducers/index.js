import { combineReducers } from 'redux'
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, INCREASE_VISIBLE_SIZE, ALL_LOADED } from '../actions'

let visibileSizeIncrement = 100

function products(state = {
  isFetching: false,
  products: [],
  visibleSize: visibileSizeIncrement
}, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        products: state.products.concat(action.products),
        lastUpdated: action.receivedAt
      })
    case INCREASE_VISIBLE_SIZE:
      return Object.assign({}, state, {
        visibleSize: state.visibleSize + visibileSizeIncrement
      })
    case ALL_LOADED:
      return Object.assign({}, state, { allLoaded: true })
    default:
      return state
  }
}

// const rootReducer = combineReducers({products})

export default products
