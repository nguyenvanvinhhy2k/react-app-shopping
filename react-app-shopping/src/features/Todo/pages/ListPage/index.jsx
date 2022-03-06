import React, { useState, useEffect, useMemo } from "react";
import TodoList from "../../component/TodoList";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import queryString from "query-string";
import TodoForm from "../../component/TodoForm";

function ListPage(props) {
  const initTodoList = [
    {
      id: "1",
      title: "React",
      status: "New",
    },
    {
      id: "2",
      title: "Vue",
      status: "Completed",
    },
    {
      id: "3",
      title: "Angular",
      status: "New",
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "All";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "All");
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    console.log(todo, idx);

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "New" ? "Completed" : "New",
    };
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    // setFilteredStatus("All");
    const queryParams = { status: "All" };
    history.push({
      params: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompletedClick = () => {
    // setFilteredStatus("Completed");
    const queryParams = { status: "Completed" };
    history.push({
      params: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    // setFilteredStatus("New");
    const queryParams = { status: "New" };
    history.push({
      params: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const renderedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === "All" || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (values) => {
    // const newTodo = {
    //   id:Date.now(),
    //   title:values.title,
    //   status:"new",
    // };
    setTodoList([
      ...todoList,
      { id: Date.now(), title: values.title, status: "new" },
    ]);

    // const newTodoList = [...todoList,newTodo]
    // setTodoList(newTodoList);
  };
  return (
    <div>
      <h2>What Todo</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h1>Todo List</h1>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>All</button>
        <button onClick={handleShowCompletedClick}>Completed</button>
        <button onClick={handleShowNewClick}>New</button>
      </div>
    </div>
  );
}

ListPage.propTypes = {};

export default ListPage;
