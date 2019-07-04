import React, { Component } from 'react';
import { List } from './components/List';
import { TodoForm } from './components/TodoForm';
import { Todo } from './models/todo';
import './App.css';

interface State {
  newTodo: Todo;
  list: Todo[];
}


class App extends Component<{}, State> {
  state = {
    newTodo: {
      id: 1,
      completed: false,
      title: '',
    },
    list: []
  };

  private deleteTodo = (deleteItem: Todo) => {
    this.setState(previousState => ({
      list: [
        ...previousState.list.filter(todo => todo.id !== deleteItem.id)
      ]
    }));
  }

  private addTodo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newTodo: {
        id: previousState.newTodo.id + 1,
        completed: false,
        title: '',
      },
      list: [...previousState.list, previousState.newTodo]
    }));
  }

  private handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        title: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My TypeScript ToDo List</h1> 
        <List list={this.state.list} onDelete={this.deleteTodo}/>
        <TodoForm 
          onAdd={this.addTodo} 
          onChange={this.handleTodoChange}
          todo={this.state.newTodo} 
        />
      </div>
    );
  }
}

export default App;


