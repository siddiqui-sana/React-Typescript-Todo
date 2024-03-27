import React from 'react'

interface TodoListProps { //Interface that defines the structure of the prop that this component will recieve
    items: {id: string, text: string}[] //Array of objects
    onDeleteTodo: (id: string) => void
}
const TodoList: React.FC<TodoListProps>  = (props) => { //We need to tell here that th prop will have items as a property.
   // const todos = [{id: "1", text: "Finish Research Task"}] => We will get this todo list as a prop here to this component
  return (
    <ul>
        {props.items.map(todo => <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick = {props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
            </li>)}
    </ul>
  )
}
export default TodoList

//We need to specify the type/structure of the prop that is being received as a parameter to a fucntional component in that Function COmponent