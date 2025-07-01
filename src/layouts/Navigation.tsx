import React from "react";

const Navigation: React.FC = () => {
  return (
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
        <li>
          <a href="/memoapp">memoapp</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
