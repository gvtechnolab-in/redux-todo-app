import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import styles from "./todolist.module.css";

export function TodoList() {
  const list = useSelector((state) => state.todo.todoList);

  return (
    <div className={styles.listwrap}>
      <div className="h3">Todos</div>
      <AddTodo />
      <div className={styles.todolistwrap}>
        {list?.length > 0
          ? list?.map((item, index) => {
              return <TodoItem key={index} item={item} />;
            })
          : "No Todos available"}
      </div>
    </div>
  );
}

export default TodoList;
