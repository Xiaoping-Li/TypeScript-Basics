import React, { FunctionComponent } from 'react';
import { Todo } from '../models/todo';

interface Props {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}

export const TodoItem: FunctionComponent<Props> = ({ todo, onDelete}) => {
  const onClick = () => onDelete(todo);

  return (
    <li>
      {todo.title} <button onClick={onClick}>X</button>
    </li>
  );  
}

