function Task ({task, onDelete, onToggle}) {

    const handleClick = () => {
        onToggle(task.id);
    }

    return(
        <>
            <li className="lista">
                <p style={{textDecoration: task.completed ? 'line-through' : 'none'}} onClick={handleClick}>{task.text}</p>
                <button onClick={() => onDelete(task.id)}>Eliminar</button>
            </li>
        </>
    )
}

export default Task