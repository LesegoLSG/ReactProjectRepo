
//import logo from './logo.svg';
import './App.css';
//import './stylesheet/Home.css'
//import Addscreen from './pages/Addscreen';
//import { Route, Routes, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Addscreen from './pages/Addscreen';


function App(){
  
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addscreen" element={<Addscreen />} />
      </Routes>
       
    </div>
  );
}

export default App;
