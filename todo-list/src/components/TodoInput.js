import React from 'react'
import { useState } from 'react'

function TodoInput(props) {
    const [InputText, setInputText] = useState('');
    const handleEnterPress=(e)=>{
        if(e.keyCode===13){
            props.addList(InputText)
            setInputText("")
        }
    }
  return (
    <div className='input-container'>
        <input type='text' value={InputText} className='input-box-todo' placeholder='add an item' onChange={e=>{setInputText(e.target.value)}} onKeyDown={handleEnterPress}/>

        <button className='add-btn' onClick={()=>{props.addList(InputText)
        setInputText("")}}>+</button>
    </div>
  )
}

export default TodoInput