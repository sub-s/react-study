import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// 페이지 컴포넌트들
const Home = () => (
  <div className="page">
    <h1>홈페이지</h1>
    <p>자바스크립트 스터디에 오신 것을 환영합니다!</p>
  </div>
);

const Study = () => (
  <div className="page">
    <h1>자바스크립트 스터디</h1>
    <p>여기서 문제를 풀어보세요.</p>
  </div>
);

const About = () => (
  <div className="page">
    <h1>소개</h1>
    <p>이 프로젝트는 자바스크립트 학습을 위한 스터디 환경입니다.</p>
  </div>
);

// 네비게이션 컴포넌트
const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <a href="/">홈</a>
      </li>
      <li>
        <a href="/study">스터디</a>
      </li>
      <li>
        <a href="/about">소개</a>
      </li>
    </ul>
  </nav>
);

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>JavaScript Study</h1>
          <Navigation />
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study" element={<Study />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
