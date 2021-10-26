import React, { useState } from "react";
import "./App.css"

function ListComp() {
  const [mylist, setmylist] = useState([]);
  const [addList, setaddList] = useState("");
  const [counter, setCounter] = useState([]);

  function increase(id) {
   
    setCounter(
      counter.map((e) => {
        if (e.id === id) {
          e.count++;
        }
       
        return e;
      })
    );
  }
  function decrease(id) {
   
    setCounter(
      counter.map((e) => {
        if (e.id === id) {
          e.count--;
        }
   
        return e;
      })
    );
  }

  const addBtnClicked = () => {
    if(addList=="")
    return
    //create object of counters
    setCounter(counter.concat({ id: counter.length, count: 0 }));
    //copy current list
    let mylistClone = [...mylist];
    //push the added list to the current list
    mylistClone.push(addList); //
    // update mylist
    setmylist(mylistClone);
    // clear  text
    setaddList("");
  };

  const deleteBtnClicke = (index) => {
   //delete the list and make counter == 0
    const mynewList = [...mylist];
    const mycounter = [...counter];
    mycounter[index].count = 0;
    mynewList.splice(index, 1);
    setmylist(mynewList);
    setCounter(mycounter)

  };

  return (
    <div className="continer">
      <h1>React List Add</h1>
      <ul>

        {mylist.map((e, index) => (

        <li style={{fontSize:22,fontWeight:"bold",listStyleType:'none'}} key={index}>
            { e }
            <button className="deletBtn" onClick={() => deleteBtnClicke(index)}>Delete</button>
            <button className="add"
              onClick={() => {
                increase(index);
              }}
            >
              +
            </button>
            <span class="counternum">{counter[index].count}</span>
            <button className="decress"
              onClick={() => {
                decrease(index);
              }}
            >
              -
            </button>
            <hr/>
          </li>
        ))}
      </ul>
      <h2> What needs to be done:</h2>

      <input  style={{padding:10,fontSize:20,textIndent:"40%"}}
        type="text"
        value={addList}
        onChange={(e) => setaddList(e.target.value)}
      />
      <button style={{padding:10,fontSize:20}} onClick={() => addBtnClicked()}>Add</button>
    </div>
  );
}

export default ListComp;
