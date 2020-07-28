import React from 'react';
import Todo from '../Todo';
import './TodoList.scss';

function TodoList({ todos, title }) {
  return (
    <div className="todoList">
      <h2 className="title">{title}</h2>
      {todos.length > 0 ? (
        <ul className="list">
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      ) : (
        <p>No items</p>
      )}
    </div>
  );
}

export default TodoList;
