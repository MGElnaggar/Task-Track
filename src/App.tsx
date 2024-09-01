import { HashRouter, Routes, Route } from "react-router-dom";

import TodoList from './Components/TodoList/TodoList';
import Registration from "./Components/Registration/Registration";
import PostsList from "./Components/PostList/PostList";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={ <TodoList /> } />
          <Route path="/registration" element={ <Registration /> } />
          <Route path="/post-list" element={ <PostsList /> } />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
