// src/components/PostList.jsx
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function PostList() {
  const posts = [
    { id: 1, title: '첫 번째 글', content: '안녕하세요!' },
    { id: 2, title: '두 번째 글', content: 'React 재밌어요!' },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        게시글 목록
      </Typography>
      {posts.map(post => (
        <Card key={post.id} sx={{ marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              sx={{ marginTop: '8px' }}
            >
              삭제
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default PostList;