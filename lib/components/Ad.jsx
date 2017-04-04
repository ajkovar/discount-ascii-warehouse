import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Ad.css'
import range from 'lodash/range'
import sample from 'lodash/sample'

function initializeAvailableNumbers(){
  // original code only showed numbers available from 0-999
  // so maintain that logic
  return range(0, 1000)
}

let availableNumbers = []

function Ad(props) {
  // cycle through existing once all numbers exhausted
  if(availableNumbers.length == 0) {
    availableNumbers = initializeAvailableNumbers()
  }
  const random = sample(availableNumbers)
  availableNumbers.splice(availableNumbers.indexOf(random), 1)
  const url = `/ad/?r=${random}`
  return <img styleName="ad" src={url}/>
}

export default CSSModules(Ad, styles, {allowMultiple: true})
