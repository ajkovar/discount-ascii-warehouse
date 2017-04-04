import fetch from 'isomorphic-fetch'
import { loadSize } from '../constants'

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
function requestProducts() {
  return { type: REQUEST_PRODUCTS }
}

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json
  }
}

export const ALL_LOADED = 'ALL_LOADED'
export function setAllLoaded() {
  return { type: ALL_LOADED }
}

export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER'
export function changeSortOrder(sortBy) {
  return function(dispatch, getState) {
    dispatch({ type: CHANGE_SORT_ORDER, sortBy })
    const { visibleSize, products } = getState()
    dispatch(fetchProducts())
  }
}

export const INCREASE_VISIBLE_SIZE = 'INCREASE_VISIBLE_SIZE'
export function increaseVisibleSize() {
  return function(dispatch, getState) {
    dispatch({ type: INCREASE_VISIBLE_SIZE })
    const { visibleSize, products } = getState()
    if(visibleSize >= products.length) {
      dispatch(fetchProducts())
    }
  }
}

// this probably should be in some sort of app wide response adapter
function convertResponseToJson(text) {
  return JSON.parse(`[${text.trim().split("\n").join(',')}]`)
}

export function fetchProducts(limit = loadSize) {
  return async function(dispatch, getState) {
    const { isFetching, products, sortBy } = getState()
    if(isFetching) {
      return
    }
    dispatch(requestProducts())
    let url = `/api/products?limit=${limit}&skip=${products.length}&sort=${sortBy}`
    let response = await fetch(url)
    let text = await response.text()
    if(text.length == 0) {
      dispatch(setAllLoaded())
    }
    dispatch(receiveProducts(convertResponseToJson(text)))
  }
}
