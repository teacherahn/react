import { Routes, Route, Link } from 'react-router-dom';
import CreatePost from './FetchPost';
import ReadPosts from './FetchGet';
import UpdatePost from './FetchPut';    
import DeletePost from './FetchDelete';

function FetchDashboard() {
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

export default FetchDashboard;