import React, { Component } from 'react';
import { List } from './components/List';
import TodoForm from './components/TodoForm';
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
      title: '',
      completed: false,
    },
    list: []
  };

  deleteTodo = (deleteItem: Todo) => {
    this.setState(previousState => ({
      list: [
        ...previousState.list.filter(todo => todo.id !== deleteItem.id)
      ]
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>My TypeScript ToDo List</h1> 
        <List list={this.state.list} onDelete={this.deleteTodo}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;


