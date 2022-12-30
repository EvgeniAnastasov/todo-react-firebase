

export const Todo = ({ todo, deleteTodo }) => {
    return (
        <div className="container">
            <div className="todo">
                <input type="checkbox"></input>
                <li>{todo.text}</li>
            </div>

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>

    )
}