// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    // console.log('Incremented')
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          The Button has been clicked <br />
          <span className="spanElement">{count}</span> times
        </h1>
        <p>click the button to increases the count!</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          click me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
