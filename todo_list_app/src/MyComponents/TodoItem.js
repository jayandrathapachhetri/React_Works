import React from 'react'

export default function TodoItem(props) {
  return (
    <div>
      <p>{props.Todo.title} and {props.Todo.desc}</p>
      <button className='btn btn-danger btn-sm mb-4' onClick={()=>{props.onDelete(props.Todo)}}>Delete</button>
    </div>
  )
}
