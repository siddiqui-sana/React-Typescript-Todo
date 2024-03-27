import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './components/todo.model'; //Interface of the Todo object


function App() {
  //const todos = [{id: "1", text: "Finish Research Task"}] //Ths todos array we want to pass to the TodoList component as a prop. But make it a state
  const [todos, setTodos] = useState<Todo[]>([]) //We define the interface of the state variable.
  const onAddTodoHandler = (text: string) => {
    // setTodos([...todos, {id: Math.random().toString(), text: text}]) //Using spread operator to add the todo to the existing todo itself.
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}] //Better way 
    )
  }
  const onDeleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todoId !== todo.id)
    })
  }

  return (
    <div className="App">
      {/* We pass the function as the prop that would add the new todo input by the user. */}
      <NewTodo onAddTodo = {onAddTodoHandler}/> 
      <TodoList items={todos} onDeleteTodo = {onDeleteTodoHandler}/> 
    </div>
  );
}

export default App;

//In typescript we need to tell the structure of the props that are being passed
//We need to define the type of the component that we are rendering.
//We need to define the structure of the prop that is beign recieved by a component.
//We need to define the type of the value of the useState hook state would hold
