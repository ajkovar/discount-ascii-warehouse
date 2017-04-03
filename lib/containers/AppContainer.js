import { connect } from 'react-redux'
import { fetchProducts } from '../actions'
import App from '../components/App.jsx'

const mapStateToProps = (state) => state

// const mapDispatchToProps = {
//   loadProducts: () => {
//     console.log('scroll')
//     return {type: 'bleh'}
//   }
// }

const AppContainer = connect(
  mapStateToProps,
  { fetchProducts }
)(App)

export default AppContainer
