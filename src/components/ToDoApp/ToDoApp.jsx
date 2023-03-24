import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "../../store/apis";

export const ToDoApp = () => {
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const previousTodo = () => {
    if (todoId > 1) setTodoId(todoId - 1);
  };
  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      {isLoading && <p>Loading...</p>}
      <pre>{JSON.stringify(todo, null, 2)}</pre>
      <button onClick={previousTodo}>Previous</button>{" "}
      <button onClick={nextTodo}>Next</button>
    </>
  );
};
