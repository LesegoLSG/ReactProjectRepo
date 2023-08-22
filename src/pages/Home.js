import React from 'react';
import '../stylesheet/Home.css'
import { useNavigate } from 'react-router-dom';
import Tasks from '../components/Tasks'
import NoMembers from '../components/NoMembers';
import Task from '../components/Task';
import EditTask from '../components/EditTask';
import AddTask from '../components/AddTask'
import Button from '../components/Button'
import Header from '../components/Header'
import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';






const Home = () => {
    //states to be used for displaying components based on events
    const [showAddTask, setShowAddTask] = useState(false);
    const [showUpdatedForm, setShowUpdatedForm] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null)
    const [tasks, setTasks] = useState([])

     //Navigating to home
     const navigate = useNavigate();

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()

    }, [])

    //Fetching tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5001/tasks')
        const data = await res.json()
        console.log(data)
        return data
    }


    //Add task from addscreen page
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5001/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })

        const data = await res.json()
        setTasks([...tasks, data])
       
    }

    //Delete a task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5001/tasks/${id}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Update task
    const retrieveTask = (TaskId) =>{
        const taskToUpdate = tasks.find(task => task.id ===TaskId);
        setSelectedTask(taskToUpdate);
        setShowUpdatedForm(true);
    };
    
    const editTask = async (updatedTask) =>{
        try{
            const res = await fetch(`http://localhost:5001/tasks/${updatedTask.id}`,{
                method: 'PUT',
                headers: {
                    'Content-type':'application/json',
                },
                body: JSON.stringify(updatedTask),
            });

            if(res.ok){
                const allUpdatedTasks = tasks.map(task =>
                    task.id ===updatedTask.id ? updatedTask : task
                );
                setTasks(allUpdatedTasks)
                setSelectedTask(null);
                setShowUpdatedForm(false);
                
            }else{
                alert('Error updating task');
            }
             

        }catch(error){
            alert('Error updating your task:' + error);
        }
    };

 
     const homeNavigation = () =>{
        navigate('/add');
    };

    //States are used below to show components based on events
    return (
        <div className="content">


            {!showAddTask && !showUpdatedForm && <button onClick={() => setShowAddTask(!showAddTask)} className='btnAdd'> + Add member</button>}


            {!showAddTask && !showUpdatedForm && tasks.length > 0 ? (

                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                onEdit={retrieveTask}
                />

            ) :!showAddTask && !showUpdatedForm && (
                <NoMembers />
            )}



            {showAddTask && !showUpdatedForm &&
                <AddTask onAdd={addTask} /> 
            }

            {!showAddTask && showUpdatedForm &&
            <EditTask taskId={selectedTask.id} onUpdate={editTask} />
             }







        </div>

    );
}

export default Home;