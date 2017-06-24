import React, { Component } from 'react';
import './App.css';
import Moment from 'react-moment'
const COUNTDOWN_TARGET=new Date(parseInt(process.env.REACT_APP_COUNTDOWN_TARGET))
class App extends Component {
  constructor (props) {
    super(props)
    google.load('search', '1')
    google.setOnLoadCallback(this.doGoogle)
    this.state = {
      timeLeft: this.calcTimeLeft()
    }
    setInterval(this.updateTime, 10)
  }

  updateTime = () => {
    this.setState({timeLeft: this.calcTimeLeft()})
  }

  calcTimeLeft = () => {
    return COUNTDOWN_TARGET - (new Date())
  }

  formatNumber(num) {
    const WIDTH = 2
    const pad = '0'
    const n = num.toString()
    return n.length >= WIDTH
      ? n
      : new Array(WIDTH - n.length + 1).join(pad) + n;
  }

  render() {
    const target = this.state.timeLeft
    const days  = Math.floor(target / (1000 * 60 * 60 * 24))
    const hours   = Math.floor((target % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((target % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = ((target % (1000 * 60)) / 1000).toFixed(2)
    return (
      <div className="App">
        <div className="time-unit">
          <span className="time-name"> ימים </span>
          <span className="time-value"> { this.formatNumber(days) } </span>
        </div>

        <div className="time-unit">
          <span className="time-name"> שעות </span>
          <span className="time-value"> { this.formatNumber(hours) } </span>
        </div>

        <div className="time-unit">
          <span className="time-name"> דקות </span>
          <span className="time-value"> { this.formatNumber(minutes) } </span>
        </div>

        <div className="time-unit">
          <span className="time-name"> שניות </span>
          <span className="time-value"> { this.formatNumber(seconds) } </span>
        </div>

      </div>
    );
  }
}

export default App;
