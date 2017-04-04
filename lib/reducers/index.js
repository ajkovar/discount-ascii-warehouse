import { combineReducers } from 'redux'
import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  INCREASE_VISIBLE_SIZE,
  ALL_LOADED,
  CHANGE_SORT_ORDER
} from '../actions'
import { sortTypes, loadSize } from '../constants'

function products(state = {
  isFetching: false,
  allLoaded: false,
  products: [],
  visibleSize: loadSize,
  sortBy: sortTypes[0]
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
        visibleSize: state.visibleSize + loadSize
      })
    case CHANGE_SORT_ORDER:
    return Object.assign({}, state, {
      sortBy: action.sortBy,
      visibleSize: loadSize,
      products: [],
      allLoaded: false
    })
    case ALL_LOADED:
      return Object.assign({}, state, { allLoaded: true })
    default:
      return state
  }
}

export default products
