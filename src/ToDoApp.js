import React, { Component } from 'react';
import logo from './logo.svg';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

class ToDoApp extends Component {
  constructor(props){
    super(props);
    this.state = {data : [
      'aaaaa',
      'bbbbb',
      'ccccc'
    ]};
  }

  handleRemove = (id) => {
    const remainder = this.state.data.filter((item, idx) => {
      if(idx !== id) return item;
    });
    this.setState({data: remainder});
  }

  handleAdd = (value) => {
    const updateData = [...this.state.data, value];
    this.setState({data: updateData})
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>My To Do List</h2>
          <AddItem handleAdd={this.handleAdd} />
        </div>
        <ListItem data={this.state.data} handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default ToDoApp;
