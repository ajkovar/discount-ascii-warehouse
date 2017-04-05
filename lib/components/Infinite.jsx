import React from 'react'

class Infinite extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate() {
    this.handleScroll()
  }
  handleScroll(e) {
    // TODO maybe generalize this so it can be used with configurable
    // container/scroll area
    const containerHeight = window.innerHeight
    const scrollableHeight = document.body.clientHeight
    const difference = scrollableHeight - containerHeight
    const scrollTop = window.pageYOffset
    const scrollPercentage = (scrollTop / difference)
    if(scrollPercentage > 0.9 || difference <= 0){
      this.props.handleNearBottom()
    }
  }
  render() {
    return <div>{this.props.children}</div>
  }
}
export default Infinite
