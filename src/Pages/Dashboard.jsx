import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Box from '@mui/material/Box';
import Chart from "react-apexcharts";
import { useState } from "react";

const Dashboard = (prop) =>{
    const [len1,set1]=useState(prop.up);
    const [len2,set2]=useState(prop.down);
    const[state,setState]=useState(
      {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["UP","DOWN"]
          }
        },
        series: [
          {
            name: "server-data",
            data: [len1,len2]
          }
        ]
      }
    )
    return (
        <>
            <Navbar />
            <Box height={70}/>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component='main' sx={{flexGrow:1 , p:9}}>
                  <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="500"
                    color="black"
                  />
                </Box>
            </Box>
        </>
    );
}
export default Dashboard;