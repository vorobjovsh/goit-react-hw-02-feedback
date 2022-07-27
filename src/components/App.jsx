import React, { Component } from 'react';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {


    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>

        <h2>Statistics</h2>
        <p>Good <span></span></p>
        <p>Neutral <span></span></p>
        <p>Bad <span></span></p>
      </>

    );
  }
}

export default App;
