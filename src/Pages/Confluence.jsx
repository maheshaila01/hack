import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Box } from "@mui/material";

const Confluence = () =>{
    return(
        <>
            <Navbar />
            <Box height={70}/>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <h1>Hi</h1>
            </Box>

        </>
    );
}

export default Confluence;