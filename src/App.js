import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UserList from "./Components/Pages/UserList";

function App() {
  return (
    <BrowserRouter>
      <Route exact path={["/", "/users"]} component={UserList} />
    </BrowserRouter>
  );
}

export default App;
