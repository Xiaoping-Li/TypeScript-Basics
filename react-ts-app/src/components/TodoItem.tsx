import React, { Component } from 'react';
import { Todo } from '../models/todo';

interface Props {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}

interface State {
  completed: boolean,
}

export class TodoItem extends Component<Props, State> {
  state = {
    completed: this.props.todo.completed,
  }

  handleCheck = () => {
    this.setState({ completed: !this.state.completed});
  }

  render() {
    const onClick = () => this.props.onDelete(this.props.todo);
    const style = this.state.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
    return (
        <li style={style}>
          <input type="checkbox" checked={this.state.completed} onChange={this.handleCheck} />
          {this.props.todo.title} <button onClick={onClick}>X</button>
        </li>
    );
  }
}

