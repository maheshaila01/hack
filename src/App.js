import { useEffect, useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
  const [data1,setdata] = useState([]);
  const getData = ()=>{
    fetch(`data.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {
      setdata(data)
      console.log(data1);
    });  
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard' exact element={<Dashboard/>}></Route>
          <Route path='/' exact element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 