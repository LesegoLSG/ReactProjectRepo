import '../stylesheet/Task.css'
import { FaPen, FaTrash } from 'react-icons/fa'

const Task = ({ task,onDelete,onEdit}) => {
    return (
        <div className="task-container">
            <div className="image-task-container">
                <img src={task.urlImage} alt="Preview" className='img-display-after'/>
            </div>
            <div>
                <h3>{task.firstname}</h3>
                <p>{task.jobtitle}</p>
            </div>
            <FaPen className='icons-task ' onClick={() => onEdit(task.id)} />
            <FaTrash className='icons-task space'  onClick={ () => onDelete(task.id) }  />
        </div>
    );
}

export default Task;