import React from 'react';
import './../App.css'
import {FaTrash} from 'react-icons/fa'

function TodoList(props) {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <span className="todo-item">{props.item}</span>
      <div className="btn-group">
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            props.deleteItem(props.index);
          }}
        >
           <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default TodoList;
