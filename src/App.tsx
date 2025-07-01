import Header from "@/layouts/Header";
import About from "@/pages/About";
import Home from "@/pages/Home";
import MemoApp from "@/pages/MemoApp";
import Study from "@/pages/Study";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study" element={<Study />} />
            <Route path="/about" element={<About />} />
            <Route path="/memoapp" element={<MemoApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
