import React from "react";
import { Route, Switch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

function TodoFeature(props) {
  return (
    <div>
      <Switch>
        <Route path="/todos" component={ListPage} exact />
        <Route path="/todos/:todoId" component={DetailPage} />
      </Switch>
    </div>
  );
}

TodoFeature.propTypes = {};

export default TodoFeature;
