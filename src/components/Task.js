import '../stylesheet/Task.css'
import { FaPen, FaTrash } from 'react-icons/fa'

const Task = ({ task,onDelete }) => {
    return (
        <div className="task-container">
            <div className="image-task-container">
                <h3>image</h3>
            </div>
            <div>
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <FaPen className='icons-task' />
            <FaTrash className='icons-task' onClick={ () => onDelete(task.id)} />
        </div>
    );
}

export default Task;