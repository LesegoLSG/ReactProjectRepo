import React from 'react';
//import Editscreen from './Editscreen';
//import '../stylesheet/Arrow-left.css'
import Arrow from '../components/Arrow';
import ImageComp from '../components/AddTask';
import '../stylesheet/Home.css';
import '../stylesheet/Screenadd.css';
import { useState } from 'react';


const Addscreen = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            firstname: "Lesego",
            jobtitle: "Software Developer",
           
          },
          {
            id: 2,
            firstname: "Thato",
            jobtitle: "Agent",
          },
          {
            id: 3,
            firstname: "Tshiamiso",
            jobtitle: "Child",
          }
    ])
    
    const addTask = (task) =>{
        const id = Math.floor(Math.round()*10000)+1
        const newTask = {id,...task}
        setTasks([...tasks,newTask])
    }

    return (  
        <div>
           
        <Arrow nameurl="/"/>
        <ImageComp btnName="Add Member" onAdd={addTask}/>
        
        </div>
      
    );
}
 
export default Addscreen;