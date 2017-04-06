import React from 'react'
import ProductList from './ProductList.jsx'
import Infinite from './Infinite.jsx'
import { sortTypes } from '../constants'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.changeSortOrder = this.changeSortOrder.bind(this)
    this.handleNearBottom = this.handleNearBottom.bind(this)

    this.sortOptions = sortTypes.map((type) => {
      return <option value={type} key={type}>{type}</option>
    })
  }
  handleNearBottom() {
    const { isFetching, allLoaded } = this.props
    if(!isFetching && !allLoaded) {
      this.props.increaseVisibleSize()
    }
  }
  changeSortOrder(e){
    this.props.changeSortOrder(e.target.value)
  }
  render() {
    const { products, visibleSize, isFetching, allLoaded } = this.props
    return (
      <Infinite handleNearBottom={this.handleNearBottom}>
        <select onChange={this.changeSortOrder}>{this.sortOptions}</select>
        <ProductList products={products} visibleSize={visibleSize} />
        <div>{isFetching ? 'Loading...' : ''}</div>
        <div>{allLoaded ? '~ end of catalogue ~' : ''}</div>
      </Infinite>
    )
  }
}

export default App
