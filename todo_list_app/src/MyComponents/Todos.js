import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import { AddTodo } from "./AddTodo";


function Todos() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const [todo, setTodo] = useState(initTodo);

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todo.length === 0) {
      sno = 0;
    }
    else {
      sno = todo[todo.length - 1].sno + 1;
    }
    const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodo([...todo, myTodo]);
      console.log(myTodo);
  }


  const onDelete = (todos)=>{
    console.log("i am delete", todos);
    setTodo(todo.filter((item)=> 
    {return item!== todos }));

    localStorage.setItem("todo", JSON.stringify(todo));
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo])

  return (
    <>
      <div className="container">
        
        <AddTodo addTodo={addTodo} />
        <h4 className='mt-4'>Todo List</h4>
        {todo.length === 0 ? "No todo to display" : todo.map((todos) => (
          <TodoItem key={todos.sno} Todo={todos} onDelete={onDelete} /> 
        ))} 
      </div>
    </>
  );
}

export default Todos;

