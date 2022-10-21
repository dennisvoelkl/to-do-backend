import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import ToDoGallery from "./ToDoGallery";

function App() {
  const [description, setPostDiscription] = useState <{}>("AnfangsPOST")
  const [toDoList, setToDoList] = useState <[]>([])

  useEffect(() => {
    axios.get(baseUrl)
        .then((answer) => {
          setToDoList(answer.data)
        })

    console.log("Description: " + description)
  },[])

  const handleChange = (event:any) => {
    setPostDiscription(event.target.value);
    console.log('value is:', event.target.value);
  };

  const baseUrl = '/api/todo'

  const getPostToController = () => {
    //setPostDiscription("")
    axios.post(baseUrl, {description: description, status: 'OPEN'})
    getAllTodos()
    console.log(description)
  }


  const getAllTodos = () => {
    axios.get(baseUrl)
        .then((answer) => {
          setToDoList(answer.data)
        })
  }

  return (
      <div className="App">
        <header className="App-header">

          <div>
            <ToDoGallery toDoList={toDoList}/>
            <button onClick={getPostToController} >add ToDo</button>
            <input type="text" onChange={handleChange} />
          </div>

        </header>
      </div>
  );
}

export default App;
