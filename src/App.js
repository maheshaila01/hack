import { useEffect, useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
  const [updata,setupdata] = useState([]);
  const [downdata,setdowndata]=useState([])
  const getData = ()=>{
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

    });  
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard' exact element={<Dashboard up={updata.length} down={downdata.length}/>}></Route>
          <Route path='/' exact element={<Home up={updata} down={downdata}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 