import { Routes, Route, Link } from 'react-router-dom';

import CreatePost from './AxiosPost';
import ReadPosts from './AxiosGet';
import UpdatePost from './AxiosPut';
import DeletePost from './AxiosDelete';


function AxiosDashboard() {

//  터미널에서 npm install axios 실행.
//각 파일 상단에 import axios from 'axios'; 추가.

  return (
    <div>
      <nav>
        <Link to="/create">작성</Link> | 
        <Link to="/read">목록</Link> | 
        <Link to="/update">수정</Link> | 
        <Link to="/delete">삭제</Link>
      </nav>
      <Routes>
        <Route path="/create" element={<CreatePost />} />
        <Route path="/read" element={<ReadPosts />} />
        <Route path="/update" element={<UpdatePost />} />
        <Route path="/delete" element={<DeletePost />} />
      </Routes>
    </div>
  );
}

export default AxiosDashboard;