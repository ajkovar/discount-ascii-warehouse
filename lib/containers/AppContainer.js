import { connect } from 'react-redux'
import { increaseVisibleSize } from '../actions'
import App from '../components/App.jsx'

const mapStateToProps = (state) => state

const AppContainer = connect(
  mapStateToProps,
  { increaseVisibleSize }
)(App)

export default AppContainer
