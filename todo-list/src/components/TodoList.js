import React from 'react'

function TodoList(props) {
  return (
    <li className='list-item'>
        {props.item}
        <span onClick={e=>{
            props.deleteItem(props.index)
        }}>-</span>
    </li>
  )
}

export default TodoList