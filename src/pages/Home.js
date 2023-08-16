import React from 'react';
import '../stylesheet/Home.css'
import { useNavigate } from 'react-router-dom';
//import Editscreen from './Editscreen';
//import '../stylesheet/Arrow-left.css'
import Tasks from '../components/Tasks'
import {useState} from 'react';





const Home = () => {
    const navigate = useNavigate();
    /*Task component state*/
    const [stateTask, setStateTask] = useState();
    /*Temopary database like*/
const tasks=[
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true,
    },

    {
        id:2,
        text:'Meeting at school',
        day:'Feb 6th at 2:30pm',
        reminder:true,
    },

    {
        id:3,
        text:'Food Shopping',
        day:'Feb 7th at 2:30pm',
        reminder:false,
    },
]

    function handleClick(){
        navigate('/Addscreen')
    }

    return (
        <div className="content">
            <button onClick={handleClick}>Add Member</button>
        <Tasks tasks={tasks}/>
        </div>
    );
}

export default Home;