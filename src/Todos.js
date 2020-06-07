import React from "react";

const Todo = ({ todos }) => {
  const todoList = todos.map((todo) => {
    return <div key={todo.id}>{todo.content}</div>;
  });

  return (
    <div className="container">
      <div>
        <h3 className="red-text text-darken-2 center">Things to do</h3>
      </div>
      {todoList}
    </div>
  );
};

export default Todo;
