import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insertTodoItem } from "../redux/todo/todo.actions";

import styles from "./todolist.module.css";

export function AddTodo() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const onAddNew = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      dispatch(insertTodoItem(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div className={styles.formwrap}>
      <form onSubmit={onAddNew}>
        <input
          type="text"
          placeholder="add New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={onAddNew}>Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
