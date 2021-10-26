import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setToDo] = useState([]);
  const [toAdd, setToAdd] = useState("");

  const handleAdd = () => {
    setToDo([...todo, { value: toAdd, counter: 0 }]);
    setToAdd("");
  };

  const deleteOne = (index) => {
    let cloneArray = [...todo];
    cloneArray.splice(index, 1);
    setToDo(cloneArray);
  };

  const count = (index, positive = true) => {
    let cloneArray = [...todo];
    let counter = cloneArray[index].counter;
    cloneArray[index].counter = positive ? counter + 1 : counter - 1;
    setToDo(cloneArray);
  };

  return (
    <div>
      <h1>TODO</h1>
      <ul>
        {todo.map((g, index) => (
          <li>
            {g.value} - <button onClick={() => deleteOne(index)}>Delete</button>
            <button onClick={() => count(index, true)}>+</button> {g.counter}
            <button onClick={() => count(index, true)}>-</button>
          </li>
        ))}
      </ul>
      What needs to be done:
      <input
        type="text"
        value={toAdd}
        onChange={(e) => setToAdd(e.target.value)}
      />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
}

export default App;
