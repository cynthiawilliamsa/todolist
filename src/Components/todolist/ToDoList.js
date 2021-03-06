//space for taks entry
//ability to add entry to list
//ability to delete item from list
//ability to check item as complete
//ability to reorder
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
// import Task from './Components/task/Task';
//css import only needed in main app.js
class ToDoList extends Component {
  state = {
    inputValue: '',    
    list: [],
    checkedA: true
  };
  componentDidMount() {
    console.log('here')
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => this.setState({list: json}))
    };
  
 handleChange = (e) => {   
  //  console.log(e.target.value, "eeee")
    this.setState({inputValue: e.target.value}); //captures value of name and puts in value
  }  
  handleAddSubmit= (e)=>{
    //on click pass handle function into component    
    e.preventDefault() ;   
    this.setState({list: [...this.state.list, this.state.inputValue], inputValue: ''}) //updating state using spread operator
    // console.log(this.state.list)
  }
  handleDelete= (index, e) => { 
    const list = Object.assign([], this.state.list);
    list.splice(index, 1);
    this.setState({list: list});        
  }  
  
  renderList() {
    //shows the list 
    return this.state.list.map((item, index)=> {     
      return <li style={{listStyleType: "none", padding: 8}}><Checkbox value="checkedA"/>{item.title}<Button style={{marginLeft: 10}} onClick={this.handleDelete}>X</Button></li>
    
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
            style={{width: 400, marginTop: 50, padding: 50}} 
            type= "text" 
            placeholder="enter task"             
            onChange = {(e) =>this.handleChange(e)}
            label="Task to Add"></TextField>  
          <Button type="submit" size="small" color="secondary" variant="fab">         
            <AddIcon />
          </Button>
          {this.renderList()}  
        </form>
      </div>
    );
  }
}
export default ToDoList;
