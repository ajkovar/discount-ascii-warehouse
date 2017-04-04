import React from 'react'
import Product from './Product.jsx'
import Ad from './Ad.jsx'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
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
  render() {
    const { products, visibleSize, isFetching } = this.props
    const length = Math.min(products.length, visibleSize)
    let productComponents = []
    for(let i=0; i<length; i++) {
      const product = products[i]
      productComponents.push(<Product key={product.id} {...product} />)
      if(i%20 === 0 && i!==0){
        productComponents.push(<Ad />)
      }
    }
    return (
      <div>
        <ul>{productComponents}</ul>
        <div>{isFetching ? 'Loading...' : ''}</div>
      </div>
    )
  }
}

export default App
