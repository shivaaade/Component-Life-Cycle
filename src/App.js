import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  changeShow = () =>
    this.setState(prev => ({
      showClock: !prev.showClock,
    }))

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          onClick={this.changeShow}
          type="button"
          className="toggle-button"
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock ? <Clock /> : ''}
        {/* {showClock && <Clock />} */}
      </div>
    )
  }
}

export default App
