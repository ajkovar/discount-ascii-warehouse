import React from 'react'
import Product from './Product.jsx'
import Ad from './Ad.jsx'
import CSSModules from 'react-css-modules';
import styles from './App.css'

function ProductList({ products, visibleSize }) {
  const length = Math.min(products.length, visibleSize)
  const gridItems = []
  for(let i=0; i<length; i++) {
    const product = products[i]
    gridItems.push(<Product key={product.id} {...product} />)
    if((i+1)%20 === 0 && i!==0){
      gridItems.push(<Ad key={i}/>)
    }
  }
  return (<div styleName="items-container">{gridItems}</div>)
}

export default CSSModules(ProductList, styles)
