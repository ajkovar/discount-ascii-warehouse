import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Product.css'

function Product(props) {
  let pxSize = `${props.size}px`
  const style = {
    height: props.size,
    fontSize: pxSize,
    lineHeight: pxSize
  }
  return <div style={style} styleName="product">{props.face}</div>
}

export default CSSModules(Product, styles, {allowMultiple: true})
