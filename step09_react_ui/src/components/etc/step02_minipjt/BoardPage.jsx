import { useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody,
  Button, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Paper
} from '@mui/material';

function BoardPage() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: '', content: '' });

  const handleAdd = () => {
    setPosts([...posts, { ...form, id: posts.length + 1 }]);
    setForm({ title: '', content: '' });
    setOpen(false);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Button variant="contained" onClick={() => setOpen(true)}>글쓰기</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>내용</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>글 작성</DialogTitle>
        <DialogContent>
          <TextField
            label="제목"
            fullWidth
            margin="dense"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <TextField
            label="내용"
            fullWidth
            margin="dense"
            multiline
            rows={4}
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>저장</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default BoardPage;
