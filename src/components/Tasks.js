import React from "react";
import Task from './Task';


/*Iterate through the list and displaying the list */
const Tasks = ({tasks, onDelete  }) => {
    
    return (  
        <>
           {tasks.map((mytasks,index) =>(
            /*'key' word for uniqueness*/ 
            <Task 
            key={index}
            /*key={mytasks.id} */
            task={mytasks} 
            onDelete={onDelete} />
           ))} 
        </>
    );
}
 
export default Tasks;
