import React, { Component } from 'react';
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";

const wrapStyle = {
  padding: 25
}
class App extends Component {

  render() {
    return (
        <div style = {wrapStyle}>
          <Jumbotron />
            <Home/>
        </div>
    )
  }
}

export default App;
