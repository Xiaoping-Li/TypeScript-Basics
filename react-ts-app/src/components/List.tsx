import React, { FunctionComponent } from 'react';
import { Todo } from '../models/todo';
import { TodoItem } from './TodoItem';

interface Props {
  list: Todo[];
  onDelete: (todoItem: Todo) => void;
}

export const List: FunctionComponent<Props> = ({list, onDelete}) => (
  <ul>
    {list.map(item => (
      <TodoItem todo={item} onDelete={onDelete} />
    ))}
  </ul>
);