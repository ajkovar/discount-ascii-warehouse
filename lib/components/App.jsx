import React from 'react'
import Product from './Product.jsx'
import Ad from './Ad.jsx'
import $ from 'jquery'

import { sortTypes } from '../constants'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.changeSortOrder = this.changeSortOrder.bind(this)

    this.sortOptions = sortTypes.map((type) => {
      return <option value={type} key={type}>{type}</option>
    })
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll()
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate() {
    this.handleScroll()
  }
  handleScroll(e) {
    const scrollTop = $(document).scrollTop()
    const windowHeight = $(window).height()
    const bodyHeight = $(document).height() - windowHeight
    const scrollPercentage = (scrollTop / bodyHeight)
    const nearBottom = scrollPercentage > 0.9 || bodyHeight == 0
    const { isFetching, allLoaded } = this.props
    if(!isFetching && !allLoaded && nearBottom) {
      this.props.increaseVisibleSize()
    }
  }
  changeSortOrder(e){
    this.props.changeSortOrder(e.target.value)
  }
  render() {
    const { products, visibleSize, isFetching, allLoaded } = this.props
    const length = Math.min(products.length, visibleSize)
    const gridItems = []
    for(let i=0; i<length; i++) {
      const product = products[i]
      gridItems.push(<Product key={product.id} {...product} />)
      if(i%20 === 0 && i!==0){
        gridItems.push(<Ad key={i}/>)
      }
    }
    return (
      <div>
        <select onChange={this.changeSortOrder}>{this.sortOptions}</select>
        <div>{gridItems}</div>
        <div>{isFetching ? 'Loading...' : ''}</div>
        <div>{allLoaded ? '~ end of catalogue ~' : ''}</div>
      </div>
    )
  }
}

export default App
