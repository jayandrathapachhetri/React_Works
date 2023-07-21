// TodoItem.js
import React from 'react';

function TodoItem({ Todo }) {
  return (
    <div>
      <h1>hello</h1>
      <p>{Todo.title} and {Todo.desc}</p>
    </div>
  );
}

export default TodoItem;
