import './App.css';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import InsertEquity from './Components/InsertEquity';
import InsertBonds from './Components/InsertBonds';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="insertEquity" element={<InsertEquity/>} />
  <Route path="insertBonds" element={<InsertBonds/>} />
{/* <Home/> */}
</Routes>
     
    </div>
  );
}

export default App;
