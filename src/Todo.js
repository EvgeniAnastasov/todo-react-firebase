

export const Todo = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <div className="container">
            <div className="todo">
                <input type="checkbox"
                    onChange={() => toggleTodo(todo)}
                    checked={todo.completed ? 'checked' : ''}
                ></input>
                <li style={todo.completed ? { textDecoration: 'line-through' } : {}}>{todo.text}</li>
            </div>

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>

    )
}