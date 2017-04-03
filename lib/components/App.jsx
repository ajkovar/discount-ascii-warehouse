import React from 'react'
import Product from './Product.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('App', this.props)
    let products = (this.props.products || []).map((product) => {
      return <Product {...product} />
    })
    return (
      <ul>{products}</ul>
    )
  }
}

export default App
