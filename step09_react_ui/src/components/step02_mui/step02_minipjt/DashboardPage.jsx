import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Grid, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// npm install recharts
function DashboardPage() {

    const data = [
        { name: '1월', uv: 400 },
        { name: '2월', uv: 300 },
        { name: '3월', uv: 500 },
    ];

    return (
        <>
            <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" anchor="left">
                <List>
                <ListItem button>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="게시판" />
                </ListItem>
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Admin Dashboard</Typography>
                </Toolbar>
                </AppBar>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: 100 }}>총 사용자 수: 123명</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: 100 }}>총 게시글 수: 45개</Paper>
                </Grid>
                </Grid>
            </Box>
            </Box>


            <LineChart width={400} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        
        </>
   );
}

export default DashboardPage;