import React, { useContext, memo } from 'react';
import classNames from 'classnames';
import { DispatchContext } from '../../context/todos.context';
import { REMOVE_TODO, TOGGLE_TODO } from '../../constants/actions';
import useToggleState from '../../hooks/useToggleState';
import EditTodoForm from '../EditTodoForm';
import './Todo.scss';

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleEdit] = useToggleState(false);
  const handleRemove = e => {
    e.stopPropagation();
    dispatch({ type: REMOVE_TODO, id });
  };
  const handleToggle = () => dispatch({ type: TOGGLE_TODO, id });

  return (
    <li
      className={classNames('todo', {
        completed: completed,
        isEditing: isEditing
      })}
    >
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggleEdit} />
      ) : (
        <>
          <span className="todo-text">{task}</span>
          <div className="todo-actions">
            <button
              className="todo-action"
              title={completed ? 'Uncheck' : 'Check'}
              onClick={handleToggle}
            >
              <i
                className={classNames('fas', {
                  'fa-check': !completed,
                  'fa-minus': completed
                })}
              ></i>
            </button>
            {!completed && (
              <button className="todo-action" title="Edit" onClick={toggleEdit}>
                <i className="fas fa-pen"></i>
              </button>
            )}
            <button
              className="todo-action"
              title="Remove"
              onClick={handleRemove}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default memo(Todo);
