import React, { useState } from 'react';
import {FaPlus} from 'react-icons/fa'

function TodoInput(props) {
  const [InputText, setInputText] = useState('');

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (InputText.trim() !== '') {
        props.addList(InputText);
        setInputText('');
      }
    }
  }

  const handleAddClick = (e) => {
    e.preventDefault();
    if (InputText.trim() !== '') {
      props.addList(InputText);
      setInputText('');
    }
  }

  return (
    <div className="input-container text-center">
      <div className="input-group mb-3">
        <input
          type="text"
          value={InputText}
          className="form-control input-box-todo"
          placeholder="Add an item"
          onChange={e => setInputText(e.target.value)}
          onKeyDown={handleEnterPress}
        />
          <button
            className="btn btn-primary ml-2 add-btn"
            onClick={handleAddClick}
            style={{ marginLeft: '1px' }}
          >
           <FaPlus /> 
          </button>
       
        </div>  
    </div>
  );
}

export default TodoInput;
