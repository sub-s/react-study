import React, { useState } from "react";
import styles from "./MemoApp.module.css";

// 메모 객체 타입 정의
interface Memo {
  id: number;
  title: string; // 각 메모의 고유 ID
  content: string; // 메모 본문
  createdAt: string; // 생성 시각
}

const MemoApp: React.FC = () => {
  // MemoApp 컴포넌트 선언

  const [memos, setMemos] = useState<Memo[]>([]); // 메모 목록을 저장하는 state (배열)
  const [title, setTitle] = useState<string>(""); // 제목입력 state
  const [content, setContent] = useState<string>(""); // 본문 입력값 state

  const handleAddMemo = () => {
    if (!title.trim() || !content.trim()) return; // 제목 / 본문이 비어 있으면 리턴
    const newMemo: Memo = {
      id: Date.now(), // 현재 시작을 id로 사용 (고유 값)
      title, // 입력한 제목
      content, // 입력한 본문
      createdAt: new Date().toLocaleString(), // 생성 사각(문자열)
    };
    setMemos([newMemo, ...memos]); // 새 메모를 배열 맨 앞에 추가
    setTitle("");
    setContent("");
  };

  return (
    <div className={styles.memoAppContainer}>
      <h2 className={styles.memoAppTitle}>나만의 메모장</h2>
      <input
        className={styles.inputTitle}
        type="text"
        placeholder="내용"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        className={styles.inputContent}
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className={styles.addButton} onClick={handleAddMemo}>
        추가
      </button>

      <h3>메모 목록</h3>
      {memos.length === 0 && <div>메모가 없습니다.</div>}
      <ul className={styles.memoList}>
        {memos.map((memo) => (
          <li key={memo.id} className={styles.memoItem}>
            <strong className={styles.memoItemTitle}>{memo.title}</strong>
            <div className={styles.memoItemContent}>{memo.content}</div>
            <small className={styles.memoItemDate}>{memo.createdAt}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoApp;
