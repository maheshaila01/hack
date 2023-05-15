import { useEffect, useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Confluence from "./Pages/Confluence";

function App() {

  const [updata,setupdata] = useState([]);
  const [downdata,setdowndata]=useState([]);
  var filtered_data=[];
  const fetchData = async () => {
    fetch(`data.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {
      setupdata(data.filter((val)=>
      {
        return val.status==="YES";
      }));
      setdowndata(data.filter((val)=>
      {
        return val.status==="NO";
      }));
      filtered_data = downdata.map(element => element.Name);

      console.log(filtered_data);

    });
  }  
  useEffect(()=>{
    fetchData();
    const interval = setInterval(() => {
      fetchData();
      fetch('http://localhost:5000/serverdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filtered_data)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    }, 20*60*1000);
  
    return () => clearInterval(interval);
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home up={updata} down={downdata}/>}></Route>
          <Route path='/Dashboard' exact element={<Dashboard up={updata.length} down={downdata.length}/>}></Route>
          <Route path='/Confluence' exact element={<Confluence/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 