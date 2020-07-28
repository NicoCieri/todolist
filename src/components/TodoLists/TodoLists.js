import React, { useContext } from 'react';
import { TodosContext } from '../../context/todos.context';
import TodoList from '../TodoList';
import './TodoLists.scss';

function TodoLists() {
  const todos = useContext(TodosContext);

  const pending = todos.filter(todo => !todo.completed);
  const completed = todos.filter(todo => todo.completed);

  return (
    <div className="todoLists">
      <div className="column">
        <TodoList title="Pending" todos={pending} />
      </div>
      <div className="column">
        <TodoList title="Completed" todos={completed} />
      </div>
    </div>
  );
}

export default TodoLists;
