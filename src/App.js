//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditTask from './components/EditTask';
import AddTask from './components/AddTask';



//Root component
function App(){
  
  return (
    <div className="App">
     {/* Route the browser (Main used for navigating back to home)*/} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
      
       
    </div>
  );
}

export default App;


