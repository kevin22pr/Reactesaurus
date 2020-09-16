import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //initializes the default state.
  state = {
    apiResponse: ''
  };

  //fetch the data from the API and store the response on this.state.apiResponse.
  callAPI(){
    fetch("http://localhost:9000")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  };
  //execute the callAPI() method after the component mounts.
  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
