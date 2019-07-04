import React, { FunctionComponent } from "react";
import { Todo } from '../models/todo';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  todo: Todo,
}

export const TodoForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  todo,
}) => (
  <form >
    <input value={todo.title} onChange={onChange} />
    <button type="submit" onClick={onAdd}>+</button>
  </form>
);