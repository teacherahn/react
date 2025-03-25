import { Routes, Route, Link } from 'react-router-dom';


const ReadPosts = () => {

  const [posts, setPosts] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 

  const fetchPosts = async () => { 
    setIsLoading(true);   
    try { 
      const response = await axios.get(import.meta.env.VITE_API_URL);
      setPosts(response.data.slice(0,5)); 
    } catch (error) {
      console.log(error);
      console.log(error.message);
    } finally { 
      setIsLoading(false); 
    }
  };

  useEffect(() => { 
    fetchPosts();
  }, []); 

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 동작을 막음
    try {
     
      const response = await axios.post(import.meta.env.VITE_API_URL, {
        title, 
        body,
        id : 101,
        userId: 1,
      });
      setTitle('');
      setBody('');

      console.log("작성 완료!");
      console.log(response);
      console.log(response.data);

    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <p>
        제목 : <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </p>
        <p>
          내용 : <textarea
            placeholder="내용"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </p>
        <button type="submit">작성</button>
      </form>
    </div>
  );
}

const UpdatePost = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, {
        id,
        title,
        body,
        userId: 1,
      });
      console.log(`글 ID ${id} 수정완료`);
      console.log(response);
      console.log(response.data);
      setId('');
      setTitle('');
      setBody('');
      
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  } 

  return (
    <div>
      <h2>게시글 수정</h2>
      <form onSubmit={handleUpdate}>
        <p>
          ID : <input
            type="number"
            placeholder="수정할 글 ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </p>
        <p>
            제목  : <input
            type="text"
            placeholder="새 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          내용 : <textarea
            placeholder="새 내용"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </p>
        <button type="submit">수정</button>
      </form>
    </div>
  );
}


const DeletePost = () => {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
      console.log(`글 ID ${id} 삭제완료`);
      console.log(response);
      console.log(response.data);
      setId('');
      
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>게시글 삭제</h2>
      <form onSubmit={handleDelete}>
        <p>
          ID : <input
            type="number"
            placeholder="삭제할 글 ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </p>
        <button type="submit">삭제</button>
      </form>
    </div>
  );
}

const AxiosDashboard = () => {

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