import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {
      term : false,
    }
  }
  updateBox(event){
    this.setState({
      term: event.target.checked
     
      
    })
   }
   
  render() {
  // console.log(this.state.term)
    return (
      <div className="wrapper">
        <label><input type="checkbox" defaultChecked={this.state.term} onClick={this.updateBox.bind(this)}/> Mostrar información importante</label>
        <p>{this.state.term ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.": ""}</p>
        
      </div>
      
    );
  }
}

export default App;
