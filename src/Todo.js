

export const Todo = ({ todo }) => {
    return (
        <div className="container">
            <div className="todo">
                <input type="checkbox"></input>
                <li>{todo.text}</li>
            </div>

            <button>Delete</button>
        </div>

    )
}