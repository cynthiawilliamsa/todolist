//app.js is gateway to main app component
import React, { Component } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';

class App extends Component {  
  render() {
    return (
      //must be one main element for render to occur
      <div className="App">       
         <ToDoList />
      </div>
    );
  }
}

export default App;
