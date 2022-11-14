import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counters from "./pages/Counters";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/counters">counters</Link>
            <Link to="/notfound">notfound</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/counters" element={<Counters />} />
          <Route path="*" element={<h1>Not found 404</h1>} />
        </Routes>
        <footer>
          <h2>footer</h2>
        </footer>
      </BrowserRouter>
    </>
  );
}
