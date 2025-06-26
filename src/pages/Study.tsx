import React from "react";

const Study: React.FC = () => {
  const a = "";
  const b = "Hello";
  const c = null;

  const result = a || (b && c) || "END";

  console.log(result); // 결과 확인

  return (
    <div className="page">
      <h1></h1>
      <p>.</p>
    </div>
  );
};

export default Study;
