import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Product.css'
import TimeAgo from 'react-timeago'

function Product(props) {
  let pxSize = `${props.size}px`
  const style = {
    height: props.size,
    fontSize: pxSize,
    lineHeight: pxSize
  }
  const date = new Date(props.date)
  let sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  let dateComponent = date < sevenDaysAgo ? <div>{props.date}</div> : <TimeAgo date={date} />
  return (
    <div styleName="product">
      <div>
        {props.price}
      </div>
      <div>
      {dateComponent}
      </div>
      <div style={style} styleName="preview">
        {props.face}
      </div>
    </div>)
}

export default CSSModules(Product, styles, {allowMultiple: true})
