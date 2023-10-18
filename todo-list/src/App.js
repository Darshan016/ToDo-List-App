import React from 'react';
import TodoInput from './components/TodoInput';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [ListTodo, SetListTodo] = useState([]);

  let addList = (InputText) => {
    if (InputText !== '') SetListTodo([...ListTodo, InputText]);
  }

  const deleteListItem = (key) => {
    let newItem = [...ListTodo];
    newItem.splice(key, 1);
    SetListTodo([...newItem]);
  }

  return (
    <div className="container border rounded p-4 mt-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-4 text-center">Your ToDo List</h1>
          <TodoInput addList={addList} />
          <hr />
          <ul className="list-group">
            {ListTodo.map((ListItem, i) => {
              return (
                <TodoList key={i} item={ListItem} deleteItem={deleteListItem} index={i} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
