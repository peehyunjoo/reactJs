import React , { Component } from 'react';
import './App.css';
class List extends Component{

  handleClick(event){
    event.currentTarget.style.textDecoration='line-through';
  }
  render(){
    return(
      <ul className="list-group list-group-flush">
        <li className="list-group-item"  onClick={this.handleClick.bind(this)}>
        {this.props.title}<br />
        {this.props.alt}
        </li>
      </ul>
    );
  } 

}

export default List;
