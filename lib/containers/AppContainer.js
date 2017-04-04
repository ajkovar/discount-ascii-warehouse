import { connect } from 'react-redux'
import { increaseVisibleSize, changeSortOrder } from '../actions'
import App from '../components/App.jsx'

const mapStateToProps = (state) => state

const AppContainer = connect(
  mapStateToProps,
  { increaseVisibleSize, changeSortOrder }
)(App)

export default AppContainer
