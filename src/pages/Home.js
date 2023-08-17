import React from 'react';
import '../stylesheet/Home.css'
import { useNavigate } from 'react-router-dom';
//import Editscreen from './Editscreen';
//import '../stylesheet/Arrow-left.css'
import Tasks from '../components/Tasks'
import NoMembers from '../components/NoMembers';
import { useState } from 'react';





const Home = () => {
    const navigate = useNavigate();
    /*Task component state*/
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: true,
            },

            {
                id: 2,
                text: 'Meeting at school',
                day: 'Feb 6th at 2:30pm',
                reminder: true,
            },

            {
                id: 3,
                text: 'Food Shopping',
                day: 'Feb 7th at 2:30pm',
                reminder: false,
            },
        ]
    )


    //Redirect to Addscreen page
    function handleClick() {
        navigate('/Addscreen')
    }

    //Delete a task

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <div className="content">

            <button onClick={handleClick}>Add Member</button>
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} />
            ) : (
                <NoMembers/>
            )}
        </div>
    );
}

export default Home;