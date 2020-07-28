import React, { useContext } from 'react';
import { DispatchContext } from '../../context/todos.context';
import useInputState from '../../hooks/useInputState';
import { ADD_TODO } from '../../constants/actions';
import Button from '../Button';
import './TodoForm.scss';

function TodoForm() {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (value !== '') {
      dispatch({ type: ADD_TODO, task: value });
      clearValue();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        placeholder="Add a new task"
        value={value}
        onChange={handleChange}
        className="field"
      />
      <Button text="Ok" lighter />
    </form>
  );
}

export default TodoForm;
