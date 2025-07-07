import { useState } from 'react'

function AddTaskForm({onAdd}) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe la tarea" value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Añadir</button>
        </form>
    )
}

export default AddTaskForm