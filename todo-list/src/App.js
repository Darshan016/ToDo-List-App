import React from 'react'
import TodoInput from './components/TodoInput'
import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {
  const [ListTodo,SetListTodo] = useState([])
  let addList = (InputText)=>{
    if(InputText!=='')
      SetListTodo([...ListTodo,InputText])
  }

  const deleteListItem=(key)=>{
    let newItem=[...ListTodo]
    newItem.splice(key,1)
    SetListTodo([...newItem])
  }
  return (
   <div className='main-container'>
    <div className='center-container'>
      <TodoInput addList={addList} />
      <h1 className='app-heading'> Your ToDo List</h1>
      <hr />
      {ListTodo.map((ListItem,i)=>{
        return(
          <TodoList key={i} item={ListItem} deleteItem={deleteListItem} index={i}/>
        )
      })}
    </div>
   </div>
  )
}

export default App