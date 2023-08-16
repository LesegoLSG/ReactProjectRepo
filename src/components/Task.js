import '../stylesheet/Task.css'

const Task = ({ task }) => {
    return (
        <div className="task-container">
            <div className="image-task-container">
                <h3>image</h3>
            </div>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    );
}

export default Task;