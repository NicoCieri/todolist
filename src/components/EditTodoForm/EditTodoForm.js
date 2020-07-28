import React, { useContext, useEffect, useCallback } from 'react';
import { DispatchContext } from '../../context/todos.context';
import useInputState from '../../hooks/useInputState';
import { EDIT_TODO } from '../../constants/actions';
import Field from '../Field';
import Button from '../Button';
import './EditTodoForm.scss';

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState(task);

  const handleEscKey = useCallback(
    e => {
      if (e.key === 'Escape') {
        clearValue();
        toggleEditForm();
      }
    },
    [toggleEditForm, clearValue]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleEscKey);
    return () => window.removeEventListener('keyup', handleEscKey);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: EDIT_TODO, id, task: value });
    toggleEditForm();
    clearValue();
  };

  return (
    <>
      <form className="editTodoForm" onSubmit={handleSubmit}>
        <Field
          autoFocus
          className="field"
          value={value}
          onChange={handleChange}
          onClick={e => {
            e.stopPropagation();
          }}
        />
        <Button text="Save" lighter />
      </form>
    </>
  );
}

export default EditTodoForm;
