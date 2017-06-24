import React, { Component } from 'react';
import './App.css';
import flag from './flag.png'
import bgImage from './bg.jpg'

const COUNTDOWN_TARGET=new Date(parseInt(process.env.REACT_APP_COUNTDOWN_TARGET))
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeLeft: this.calcTimeLeft()
    }
    setInterval(this.updateTime, 1)
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

    const offset = Math.floor(target / 60) % 11693

    const days  = Math.floor(target / (1000 * 60 * 60 * 24))
    const hours   = Math.floor((target % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((target % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = ((target % (1000 * 60)) / 1000).toFixed(2)

    return (
      <div className={ `App ${this.state.bgLoaded ? '' : 'hidden'}` }>
        <div
          className="bgImage"
          style={ {backgroundPositionX: offset}} >

        </div>
        <img className="hidden" src={bgImage} onLoad={ () => this.setState({bgLoaded: true}) } />
        <div className="time-container">
        <img src={flag} className="flag"/>
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
      </div>
    );
  }
}

export default App;
