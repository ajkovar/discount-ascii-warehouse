import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import App from '../components/App.jsx'

const mapStateToProps = (state) => state

const mapDispatchToProps = {
  // onTodoClick: toggleTodo
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
