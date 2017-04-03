import React from 'react'
import Product from './Product.jsx'
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
    var scrollTop = $(document).scrollTop();
    var windowHeight = $(window).height();
    var bodyHeight = $(document).height() - windowHeight;
    var scrollPercentage = (scrollTop / bodyHeight);
    if(!this.props.isFetching && (scrollPercentage > 0.9 || bodyHeight == 0)) {
      this.props.increaseVisibleSize()
    }
  }
  render() {
    let products = this.props.products.slice(0, this.props.visibleSize).map((product) => {
      return <Product key={product.id} {...product} />
    })
    return (
      <div>
        <ul>{products}</ul>
        <div>{this.props.isFetching ? 'Loading...' : ''}</div>
      </div>
    )
  }
}

export default App
