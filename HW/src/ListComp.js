import React, { useState } from "react";

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
    <div>
      <h1>React List Add</h1>
      <ul>
        {mylist.map((e, index) => (
          <li key={index}>
            {e}
            <button onClick={() => deleteBtnClicke(index)}>Delete</button>
            <button
              onClick={() => {
                increase(index);
              }}
            >
              +
            </button>
            <span>{counter[index].count}</span>
            <button
              onClick={() => {
                decrease(index);
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <h4> What needs to be done:</h4>

      <input
        type="text"
        value={addList}
        onChange={(e) => setaddList(e.target.value)}
      />
      <button onClick={() => addBtnClicked()}>Add</button>
    </div>
  );
}

export default ListComp;
