import React from 'react';
// import './App.css';
import PostList from "../pages/PostList";

import {BrowserRouter, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
        <Route path="/" exact component={PostList} />
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
