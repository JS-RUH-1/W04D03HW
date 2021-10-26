import "./App.css";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState([]);

  //-------
  const addTodo = (e) => {
    e.preventDefault();
    let newTask = e.target[0].value;
    setTodos([...todos, newTask]);
    setCounter([...counter, 0]);
  };
  //-------

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  //--------
  const countepluse = (index) => {
    let num = counter[index];
    counter.splice(index, 1, num + 1);
    setCounter((counter) => [...counter]);
  };
  //---------
  const counteminus = (index) => {
    let num = counter[index];
    counter.splice(index, 1, num - 1);
    setCounter((counter) => [...counter]);
  };

  return (
    <div className="app">
      <h4>Maha's ToDo List</h4>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button  onClick={() => removeTodo(index)}> Delete </button>

            <button id={index} onClick={() => countepluse(index)}>
              +
            </button>
            {counter[index]}

            <button id={index} onClick={() => counteminus(index)}>
              -
            </button>
          </li>
        ))}
      </ul>
      <h5>What needs to be done:</h5>
      <form onSubmit={addTodo}>
        <div>
          <input type="text" id="Task" />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
export default App;
