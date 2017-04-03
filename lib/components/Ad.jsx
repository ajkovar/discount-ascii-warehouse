import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Ad.css'

function Ad(props) {
  const random = Math.floor(Math.random()*1000)
  const url = `/ad/?r=${random}`
  return <img styleName="ad" src={url}/>
}

export default CSSModules(Ad, styles, {allowMultiple: true})
