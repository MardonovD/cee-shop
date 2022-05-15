import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";

import React from "react";
import Header from "./components/Header.js";
import ProductList from "./components/ProductList.js";
import ProductDetails from "./components/ProductDetail.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route
              path="/product/:productId"
              exact
              component={ProductDetails}
            />
            <Route>404 Not Found</Route>
          </Switch>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
