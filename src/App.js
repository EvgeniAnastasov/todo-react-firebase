import './App.css';
import { useEffect, useState } from 'react'
import { Todo } from './Todo';

import { db } from './firebase'
import { query, collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'

function App() {

	const [todos, setTodos] = useState([])
	const [input, setInput] = useState('')

	useEffect(() => {
		const q = query(collection(db, 'todos'))
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let todosArr = []
			querySnapshot.forEach((doc) => {
				todosArr.push({ ...doc.data(), id: doc.id })
			});
			setTodos(todosArr)
		})
		return () => unsubscribe()

	}, [])

	const addTodo = async (e) => {
		e.preventDefault(e)

		await addDoc(collection(db, 'todos'), {
			text: input,
			completed: false
		})
		setInput('')
	}

	const deleteTodo = async (id) => {
		await deleteDoc(doc(db, 'todos', id))
	}

	return (
		<div className='main'>
			<h1>Todo Demo</h1>

			<form onSubmit={addTodo}>
				<input
					value={input}
					onChange={(event) => setInput(event.target.value)}
					placeholder="Enter Todo"
					type="text"
				>
				</input>

				<button >Add</button>
			</form>

			<ul>
				{todos.map((todo, index) => (
					<Todo
						key={index}
						todo={todo}
						deleteTodo={deleteTodo} />))}

			</ul>
			{todos.length < 1
				? <p>{`No todos`}</p>
				: <p>{`You have ${todos.length} todos`}</p>}

		</div>
	);
}

export default App;
