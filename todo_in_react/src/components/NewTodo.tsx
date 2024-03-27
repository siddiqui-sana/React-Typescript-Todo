import React, {useRef} from "react";

type NewTodoProp = {
    onAddTodo: (s: string) => void; //type od interface we can use any to define the structure of the prop
}


const NewTodo: React.FC<NewTodoProp> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null)  //We need to specify the type of value this ref will get and also an initial value(null)

    const todoSubmitHandler = (event: React.FormEvent) => {
        //This function should be fired when this form is submitted
        event.preventDefault(); //To prevent sending the actual request to the server
        const inputText = textInputRef.current!.value;
        props.onAddTodo(inputText)

    }
   return (
   <form onSubmit={todoSubmitHandler}>
    <div>
    <label htmlFor="Todo">Add Todo</label>
    <input type="text" id="Todo" name="Todo" ref = {textInputRef}/> 
    {/* "We need to specify what kind of data will be stored in the ref while creating the ref using the hook line 4 */}
    </div>
    <button type="submit">Add Todo</button>
   </form> 
   )
}

export default NewTodo;

//The data we get from this form we need to give to the App in the TodoList's array so it can be displayed on the screen