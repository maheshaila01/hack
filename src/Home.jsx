import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/system";
import './home.css'
import { useState } from "react";
import { Button } from "bootstrap";
import UpInfo from "./UpInfo";
import DownInfo from "./DownInfo";

const Home = (props) =>{
    const up=props.up;
    const down=props.down;
    const [lenup,setLen]=useState(up.length);
    const [lendw,setlendw]=useState(down.length);
    const [total,setTotal]=useState(lenup+lendw)
    const[all,setAll]=useState(true);
    const[yes,setYes]=useState(false);
    const[no,setno]=useState(false);
    return(
        <>
             <Navbar />
            <Box height={40}/>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component='main' sx={{flexGrow:1 , p:9}}>
                     <h1 id="title" className="text-center"> Server Data</h1>
                     <div className="container mt-4" id="box1">
                        <div className="row pt-3">
                           <div className="col-8"></div>
                           <div className="col-1">
                            <button className="btn" id="btn1" onClick={()=>{setAll(true);setYes(false);setno(false)}}>ALL</button>
                           </div>
                           <div className="col-1">
                            <button className="btn" id="btn2" onClick={()=>{setYes(true);setAll(false);setno(false)}}>UP</button>
                           </div>
                           <div className="col-1">
                            <button className="btn" id="btn3" onClick={()=>{setno(true);setAll(false);setYes(false)}}>DOWN</button>
                           </div>
                        </div>
                         <div className="row mt-5">
                            <div className="col-3">
                                <h4>SNO</h4>
                            </div>
                            <div className="col-3">
                                <h4>Server</h4>
                            </div>
                            <div className="col-3">
                                <h4>Status</h4>
                            </div>
                            <div className="col-3">
                                <h4>Protocol</h4>
                            </div>
                         </div>
                         <div>
                            
                                {
                                   all &&
                                   <div>
                                   <UpInfo up={up}></UpInfo>  
                                   <DownInfo down={down}></DownInfo>
                                  </div>      
                                }
                                {
                                    yes &&
                                    <UpInfo up={up}></UpInfo>  
                                }
                                {
                                    no && 
                                    <DownInfo down={down}></DownInfo>
                                }
                            
                         </div>
                         {
                        //  <div className="row mt-2">
                        //  <div className="col-4">TotalUpServers={lenup}</div>
                        //  <div className="col-4">TotalDownServers={lendw}</div>
                        //  <div className="col-4">TotalServers={total}</div>
                         }
                     </div>
                  
                </Box>
            </Box>
        </>
    );
}
export default Home;