import { Routes, Route, Link } from 'react-router-dom';
import SimpleForm from './components/SimpleForm';
import PostList from './components/PostList';
import { AppBar, Toolbar, Typography, Button , TextField, CardMedia, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton, MenuItem, Menu, Tabs, Tab, Box, Snackbar, Grid, Checkbox } from '@mui/material';
import { useState } from 'react';
import BoardPage from './components/step02_minipjt/BoardPage';
import LoginPage from './components/step02_minipjt/LoginPage';
import DashboardPage from './components/step02_minipjt/DashboardPage';
import Tester from './components/step02_minipjt/Tester';

function App() {
 

  // appbar
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  //tab
  const [value, setValue] = useState(0);

  // snackbar
  const [open, setOpen] = useState(false);

  return (
   <>
    {/* <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="contained" color="secondary">Secondary</Button>
    <Button variant="contained" disabled>Disabled</Button>
    <Button variant="contained" size="large" onClick={() => alert("Clicked!")}>
      Click Me
    </Button>

    <hr/>

    <TextField label="이름" variant="outlined" />
    <TextField label="이메일" variant="filled" />
    <TextField label="비밀번호" type="password" />
    <TextField label="에러 있음" error helperText="입력값이 잘못되었습니다." />

    <hr/>

    <Card sx={{ maxWidth: 300 }}>
    <CardMedia
      component="img"
      height="140"
      image="https://source.unsplash.com/random"
      alt="Random"
    />
      <CardContent>
        <Typography gutterBottom variant="h5">제목</Typography>
        <Typography variant="body2" color="text.secondary">
          여기에 카드 설명이 들어갑니다.
        </Typography>
      </CardContent>
    </Card>

    <hr/>

    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>이름</TableCell>
          <TableCell>나이</TableCell>
          <TableCell>직업</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {[
          { name: "홍길동", age: 25, job: "개발자" },
          { name: "김영희", age: 30, job: "디자이너" }
        ].map((row, idx) => (
          <TableRow key={idx}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.job}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

  <hr/>

  <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleMenu}>
           <MenuIcon /> aaa
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>홈</MenuItem>
          <MenuItem onClick={handleClose}>로그아웃</MenuItem>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI 데모
        </Typography>
      </Toolbar>
    </AppBar>

    <hr/>

    <Tabs value={value} onChange={(e, newVal) => setValue(newVal)}>
        <Tab label="첫번째" />
        <Tab label="두번째" />
        <Tab label="세번째" />
      </Tabs>
      <Box p={2}>선택된 탭: {value + 1}</Box>

    <hr/>

    <Button onClick={() => setOpen(true)}>알림 보기</Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="저장되었습니다!"
      />

    <hr/>

    <Grid container spacing={2}>
      {[1, 2, 3, 4].map((item) => (
        <Grid item xs={6} md={3} key={item}>
          <Paper sx={{ height: 100, textAlign: 'center', lineHeight: '100px' }}>{item}</Paper>
        </Grid>
      ))}
    </Grid> */}
{/* 
  <BoardPage />
  <LoginPage /> */}
  {/* <DashboardPage />
  <Checkbox {...label} defaultChecked />
<Checkbox {...Label} />
<Checkbox {...label} disabled />
<Checkbox {...label} disabled checked /> */}
  <Tester />
   </>

  )
}

export default App
