import {useState} from "react";
function Todo() {
    const [todo, setTodo]= useState("");
    const [todoList, setTodoList]= useState([])
    const handleChange= (event) => {
        setTodo(event.target.value)
        console.log(todo)
    }
    const handleSubmit= (event) => {
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(tempList);
        setTodo("");
    }

    return <div>todo
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} type="text"></input>
            <button type="submit">submit this</button>
        </form>
        {todoList.map((item)=> (
            <h3>{item}</h3>
        ))}
    </div>
}

export default Todo;