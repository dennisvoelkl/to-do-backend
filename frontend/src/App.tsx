import React, {FormEvent, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {ToDo} from "./ToDo";
import ToDoGalleryOverview from './ToDoGalleryOverview';

function App() {
    const [description, setPostDiscription] = useState<{}>()
    const [toDoList, setToDoList] = useState<[]>([])

    useEffect(() => {
        axios.get(baseUrl)
            .then((answer) => {
                setToDoList(answer.data)
            })

        console.log("Description: " + description)
    }, [])

    const handleChange = (event: any) => {
        setPostDiscription(event.target.value);
        console.log('value is:', event.target.value);
        getAllTodos();

    };

    const baseUrl = '/api/todo/'

    const getPostToController = (
        event: FormEvent<HTMLFormElement>
    ) => {
        console.log("ICH BIN HIER")
        event.preventDefault()
        axios.post(baseUrl, {description: description, status: 'OPEN'})
            .then(getAllTodos)
        console.log(description)
        setPostDiscription('')
        console.log(description)
    }

    const getAllTodos = () => {
        axios.get(baseUrl)
            .then((answer) => {
                setToDoList(answer.data)
            })
    }

    const deletePostToController = (id: string) => {
        axios.delete(`/api/todo/${id}`)
            .then(getAllTodos)
    }


    const advanceTodo = (todo: ToDo) => {
        const updatedTodo = {
            id: todo.id,
            description: todo.description,
            status: getNextStatus(todo.status)
        }
        axios.put(`/api/todo/${todo.id}`, updatedTodo)
            .then(getAllTodos)
    }

    const advanceReverseTodo = (todo: ToDo) => {
        const updatedTodo = {
            id: todo.id,
            description: todo.description,
            status: getPreviouStatus(todo.status)
        }
        axios.put(`/api/todo/${todo.id}`, updatedTodo)
            .then(getAllTodos)
    }

    const getNextStatus = (status: string) => {
        if (status === "OPEN"){
            return "IN_PROGRESS"
        }
            return "DONE"
    }

    const getPreviouStatus = (status: string) => {
        if (status === "DONE"){
            return "IN_PROGRESS"
        }
        return "OPEN"
    }


    return (
        <div className="App">
            <header className="App-header">

                <div>
                    <ToDoGalleryOverview
                        todos={toDoList}
                        deleteTodo={deletePostToController}
                        advance={advanceTodo}
                        advanceReverse={advanceReverseTodo} />

                    <form onSubmit={getPostToController}>
                        <button>add Task</button>
                        <input type="text" onChange={handleChange}/>
                    </form>

                </div>

            </header>
        </div>
    );
}

export default App

