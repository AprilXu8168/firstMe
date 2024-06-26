import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={apiResponse:""}
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}))
  }

  componentWillMount(){
    this.callAPI()
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
          <p>
            {this.state.apiResponse}
          </p>
      </header>
    </div>
  );
}
}

export default App;