import React, { useState } from "react";
import Counter from "./Counter";
let arr = [];
let showList;
function ToDo() {
  const [user, setUser] = useState("");

  function list(e) {
    e.preventDefault();
    console.log(e.target.parentElement.children[1].value)
    setUser(e.target.parentElement.children[1].value);
    console.log(user)
    arr.push(e.target.parentElement.children[1].value);
    showList = arr.map((x) => {
      return (
        <div className="content">
          <li>{x}</li>
          <button onClick={removeItems}>Delete</button>
          <Counter></Counter>
        </div>
      );

    });
  }
  function removeItems(e) {
  let del= e.target.parentElement;
  del.remove();
  }

  return (
    <div >
      <p>What Need To Be Done </p>
      <input type="text" ></input>
      <button  onClick={list}>Add</button>
      {showList}
    </div>
  );
}

export default ToDo;
