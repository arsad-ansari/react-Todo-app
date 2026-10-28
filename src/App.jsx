
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Compnents/portfolio";
import Todo from "./Compnents/todo";
import Search from "./Compnents/movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/movie" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
