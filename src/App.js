import React, { Component } from 'react'
import Clock from './Clock';

export default class App extends Component {
  constructor() {
    console.log('constructor');
    super()
    this.state = {
      date: new Date(),
      show: true,
    }
  }

  componentDidMount() {
    console.log('componentDidMount');

    this.TimerID = setInterval(() => {
      this.tick()
    }, 1000);

    this.toggle = () => {
      this.setState({ show: !this.state.show })
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');

    return true
  }

  tick() {
    console.log('tick');
    this.setState(
      { date: new Date() }
    )
  }


  render() {
    console.log('render');

    return (
      <div>
        <button onClick={this.toggle}>show / hide</button>
        {this.state.show
          ?
          <Clock date={this.state.date} timer={this.TimerID} />
          : null
        }
      </div>
    )
  }
}
