import { Box, Button, TextField, Typography, Paper } from '@mui/material';

function LoginPage() {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ p: 4, width: 300 }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          로그인
        </Typography>
        <TextField fullWidth label="이메일" margin="normal" />
        <TextField fullWidth label="비밀번호" type="password" margin="normal" />
        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          로그인
        </Button>
      </Paper>
    </Box>
  );
}

export default LoginPage;