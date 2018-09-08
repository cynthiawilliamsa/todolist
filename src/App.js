//app.js is gateway to main app component
import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar/NavBar';
import ToDoList from './Components/todolist/ToDoList';
import Task from './Components/task/Task';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class App extends Component {  
  
  render() {
    return (
      //must be one main element for render to occur
      <MuiThemeProvider>
        <div className="App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>         
            <NavBar/>    
            <ToDoList/>                 
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
