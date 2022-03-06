import CouterFeature from "features/Counter";
import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./component/NotFound";
import SongFeature from "./features/Song";
import TodoFeature from "./features/Todo";
import ProductFeature from "./features/Products";
import Header from "./component/Header";
import CartFeature from "./features/Cart";

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     };
  //     axios.get("https://api.ezfrontend.com/products").then((res) => {
  //    console.log(res.data);
  //   });

  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />

        <Route path="/" component={ProductFeature} exact />
        <Route path="/songs" component={SongFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/couters" component={CouterFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/carts" component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
      {/* <SongFeature /> */}
      {/* <TodoFeature /> */}
      {/* <Route path="/todos" component={TodoFeature} /> */}
    </div>
  );
}

export default App;
