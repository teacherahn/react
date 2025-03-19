import { Routes, Route, Link } from 'react-router-dom';
import SimpleForm from './components/SimpleForm';
import PostList from './components/PostList';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
 
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React MUI 예제
          </Typography>
          <Button color="inherit" component={Link} to="/form">
            폼
          </Button>
          <Button color="inherit" component={Link} to="/posts">
            게시글
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/form" element={<SimpleForm />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/" element={<Typography variant="h5" sx={{ padding: '20px' }}>홈</Typography>} />
      </Routes>
    </div>
  )
}

export default App
