// src/components/SimpleForm.jsx
import { Button, TextField, Typography } from '@mui/material';

function SimpleForm() {
  const [name, setName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`안녕, ${name}!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        간단한 폼
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="이름"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          제출
        </Button>
      </form>
    </div>
  );
}

export default SimpleForm;