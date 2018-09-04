import React, { Component } from 'react';


class Task extends Component {
    render() {
        return ( //post componeunt rendered in app js, click on turn me green to turn post text green
            <div>
                <p style={{color: this.props.color}}>{this.props.inputValue}</p>                
                <p onClick={()=> this.props.id(this.props.id)}></p>
                {/* <Button style={{marginLeft: 10}} onClick={this.handleDeletetype="submit"}>X</Button> */}
            </div>
        );
    }
}

export default Task;