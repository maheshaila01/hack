import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';
function App() {

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