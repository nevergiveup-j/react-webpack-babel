import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <div>header7</div>
        {this.props.children}
      </div>
    );
  }
}

export default App;