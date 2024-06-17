"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NextPage } from 'next';

const ArticleSave:NextPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await axios.post('/api/posts', { title, content });
    router.push('/posts');
  };

  return (
    <div>
      <h1>글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">작성</button>
      </form>
    </div>
  );
};

export default ArticleSave;