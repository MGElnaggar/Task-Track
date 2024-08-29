import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoList from './Components/TodoList/TodoList';
import Registration from "./Components/Registration/Registration";
import PostsList from "./Components/PostList/PostList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <TodoList /> } />
          <Route path="/registration" element={ <Registration /> } />
          <Route path="/post-list" element={ <PostsList /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
