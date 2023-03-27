import Sidebar from "./Sidebar";
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack } from "@mui/system";
import Typography from '@mui/material/Typography';



const Dashboard = () =>{
    return (
        <>
            <Navbar />
            <Box height={70}/>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component='main' sx={{flexGrow:1 , p:9}}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <Stack spacing={7} direction="row">
                        <Card sx={{ maxWidth: 49+"%",height: 140 }}>
                            {/* <CardMedia
                                sx={{ height: 140 }}
                                color="green"
                            /> */}
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                        <Box height={70}/>
                        <Card sx={{ maxWidth: 49+"%",height: 140 }}>
                            {/* <CardMedia
                                sx={{ height: 140 }}
                                color="green"
                            /> */}
                            <CardContent>
                                
                            </CardContent>
                        </Card>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </>
    );
}

export default Dashboard;