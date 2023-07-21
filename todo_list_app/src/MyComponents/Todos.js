import React, {useState} from 'react';
import TodoItem from './TodoItem';


function Todos() {
  const [todo, setTodo] = useState([
    {
      sno: 1,
      title: "Learn reactjs and redux in depth.",
      desc: "I will learn the basics of Redux by building a ToDo app using it.",
    },
    {
      sno: 2,
      title: "Build a portfolio website.",
      desc: "I will showcase my projects and skills on the portfolio website.",
    },
    {
      sno: 3,
      title: "Exercise and stay healthy.",
      desc: "I will do regular workouts and eat a balanced diet to stay fit.",
    },
  ]);

  const onDelete = (todos)=>{
    console.log("i am delete", todos);
    setTodo(todo.filter((item)=> 
    {return item!== todos }));
  }

  return (
    <>
      <div className="container">
        <h2 className='text-center my-3'>Todo List</h2>
        {todo.length === 0 ? "No todo to display" : todo.map((todos) => (
          <TodoItem key={todos.sno} Todo={todos} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
}

export default Todos;

