import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // initialise state
    this.state = { date: new Date() };
    // set timezone
    this.timeZone = props.timeZone;
  }

  // set up timer
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  // tear down timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <p>
        {this.timeZone}:{" "}
        {this.state.date.toLocaleString("en-GB", {
          timeZone: this.props.timeZone,
        })}
      </p>
    );
  }
}

export default Clock;
