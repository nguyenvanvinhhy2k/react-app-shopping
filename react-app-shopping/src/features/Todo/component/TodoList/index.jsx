import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.css";

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  return (
    <ul className="todo_album">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true, //luon luon co class la todo-item
            completed: todo.status === "Completed", //class la completed khi todo.status la completed
          })}
          onClick={() => handleTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

export default TodoList;
