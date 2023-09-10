import React from "react";
import Task from './Task';


/*Iterate through the list and displaying the task/member list */
const Tasks = ({tasks, onDelete,onEdit }) => {
    
    return (  
        <>
            {/* For each task set the member details  */}
           {tasks.map((mytasks,index) =>(
            /*'key' word for uniqueness*/ 
            <Task 
            key={index}
            task={mytasks} 
            onDelete={onDelete} 
            onEdit={onEdit}
            />
            
           ))} 
        </>
    );
}
 
export default Tasks;
