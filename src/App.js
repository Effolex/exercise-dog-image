import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dog from './components/dog';
import Button from './components/button';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Dog />
      </div>
    );
  } 
}

export default App;
