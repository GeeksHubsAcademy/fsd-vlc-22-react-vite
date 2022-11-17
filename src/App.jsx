import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counters from "./pages/Counters";
import Tasks from "./pages/Tasks";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/counters">counters</Link>
            <Link to="/tasks">tasks</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/counters" element={<Counters />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<h1>Not found 404</h1>} />
        </Routes>
        <footer>
          <h2>footer</h2>
        </footer>
      </BrowserRouter>
    </>
  );
}
