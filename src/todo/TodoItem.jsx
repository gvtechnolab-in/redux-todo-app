import React from "react";
import { useDispatch } from "react-redux";
import { removeTodoItem, updateTodoItem } from "../redux/todo/todo.actions";

import styles from "./todolist.module.css";

export function TodoItem(props) {
  const dispatch = useDispatch();
  const onCheckboxChange = (e) => {
    let status = "new";
    if (e?.target?.checked) {
      status = "complete";
    }
    dispatch(
      updateTodoItem(props?.item?.id, { ...props?.item, status: status })
    );
  };
  return (
    <div className={styles.itemWrap}>
      <input
        type="checkbox"
        id={props?.item?.id}
        value={props?.item?.id}
        checked={props?.item?.status === "complete"}
        onChange={onCheckboxChange}
      />
      <span className={`${styles.todoname} ${props?.item?.status === 'complete' ? styles.completed : ''}`}>{props.item.name}</span>
      <button
        type="button"
        onClick={(e) => {
          if (window.confirm("are you sure to remove?")) {
            dispatch(removeTodoItem(props.item));
          }
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default TodoItem;
