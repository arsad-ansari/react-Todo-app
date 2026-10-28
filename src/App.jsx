
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Compnents/todo";
import Search from "./Compnents/movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/movie-explorer" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
