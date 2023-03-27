import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/system";
const Home = () =>{
    return(
        <>
             <Navbar />
            <Box height={40}/>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component='main' sx={{flexGrow:1 , p:9}}>
                <h1>Home</h1>
                </Box>
            </Box>
        </>
    );
}
export default Home;