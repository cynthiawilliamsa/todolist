//space for taks entry
//ability to add entry to list
//ability to delete item from list
//ability to check item as complete
//ability to reorder
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
//css import only needed in main app.js

class ToDoList extends Component {
  state = {
    userHasClicked: 0,
  }  
  handleAddSubmit= (event)=>{
    //on click pass handle function into component
    //add list item to list 
    event.preventDefault() ;
    console.log('click');
  }
  render() {
    return (
      //must be one main element for render to occur
      <div className="ToDoList">        
        <div className="header">          
          <h1>Task List</h1>  
        </div>
        <form>
          <input type= "text" placeholder="enter task"/>
          {/* when passing funtions into component drop () from end because you are not calling function. */}         
          <Button variant="contained" color="primary" type="submit" onClick={this.handleAddSubmit}>Add</Button> 
          {/* <button type="submit">Delete</button> */}
        </form>
      </div>
    );
  }
}
export default ToDoList;
