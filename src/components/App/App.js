import React from 'react';
import { TodosProvider } from '../../context/todos.context';
import TodoLists from '../TodoLists';
import TodoForm from '../TodoForm';
import './App.scss';

function TodoApp() {
  return (
    <TodosProvider>
      <div className="container">
        <TodoForm />
        <TodoLists />
      </div>
    </TodosProvider>
  );
}

export default TodoApp;
