//space for taks entry
//ability to add entry to list
//ability to delete item from list
//ability to check item as complete
//ability to reorder
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// import Task from './Components/task/Task';
//css import only needed in main app.js
class ToDoList extends Component {
  state = {
    inputValue: '',    
    list: []
  };
 handleChange = (e) => {   
  //  console.log(e.target.value, "eeee")
    this.setState({inputValue: e.target.value}); //captures value of name and puts in value
  }  
  handleAddSubmit= (e)=>{
    //on click pass handle function into component    
    e.preventDefault() ;   
    this.setState({list: [...this.state.list, this.state.inputValue], inputValue: ''}) //updating state using spread operator
  }
  handleDelete= (e) => {
    e.preventDefault();
    const filteredList = this.state.list.slice(e, 1) 
    this.setState({list: filteredList});   
    console.log(filteredList);       
  }
  
  
  renderList() {
    //shows the list
    return this.state.list.map((item, index)=> {
      return <li style= {{listStyleType: "none", padding: 8}} >{item}<Button style={{marginLeft: 10}} onClick={this.handleDelete} type="submit">X</Button></li>
    })
  }  
  render() {
    return (
      //must be one main element for render to occur
      <div className="ToDoList">  
        <form onSubmit={(e) => this.handleAddSubmit(e)}>
          <TextField 
            name= "enterText"
            value={this.state.inputValue}
            style={{width: 500, marginTop: 50, padding: 50}} 
            type= "text" 
            placeholder="enter task"             
            onChange = {(e) =>this.handleChange(e)}
            label="Task to Add"></TextField>  
          <Button type="submit" size="small" color="default" variant="fab">+</Button>
          {this.renderList()}  
        </form>
      </div>
    );
  }
}
export default ToDoList;
