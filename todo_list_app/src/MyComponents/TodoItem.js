import React from 'react'

export default function TodoItem(props) {
  return (
    <div>
      <p><strong className='h5'>{props.Todo.title}</strong> <br /> {props.Todo.desc}</p> 
      <button className='btn btn-danger btn-sm ' onClick={()=>{props.onDelete(props.Todo)}}>Delete</button> <hr></hr>
    </div> 
  )
}
