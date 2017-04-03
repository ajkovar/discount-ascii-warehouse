import fetch from 'isomorphic-fetch'

const limit = 100

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
function requestProducts() {
  return { type: REQUEST_PRODUCTS }
}

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json,
    receivedAt: Date.now()
  }
}

// this probably should be in some sort of app wide response adapter
function convertResponseToJson(text) {
  return JSON.parse(`[${text.trim().split("\n").join(',')}]`)
}

export function fetchProducts() {
  return async function(dispatch, getState) {
    const { isFetching, page } = getState()
    if(isFetching) {
      return
    }
    dispatch(requestProducts())
    let skip = limit * page
    let response = await fetch(`/api/products?limit=${limit}&skip=${skip}`)
    let text = await response.text()
    dispatch(receiveProducts(convertResponseToJson(text)))
  }
}
