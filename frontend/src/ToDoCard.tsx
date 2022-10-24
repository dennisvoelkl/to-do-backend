import React, {useState} from 'react';
import {ToDo} from "./ToDo";
import './ToDoCard.css';
import axios from "axios";

type singleToDo = {
    singleToDo:ToDo,
    deleteTodo: (id: string) => void,
    advance: (todo: ToDo) => void,
    advanceReverse: (todo: ToDo) => void,
}

export default function ToDoCard(props: singleToDo) {

    const [visibleButton, setVisibleButton] = useState<boolean>(true)

    return <div>
            <section className="card">
                {props.singleToDo.status !== 'DONE' ?
                    <button onClick={() => props.advance(props.singleToDo)}>Advanced</button>
                    :
                    <>
                    <button hidden={true}></button>
                    <button onClick={() => props.advanceReverse(props.singleToDo)}>Make undo</button>
                    </>
                }
                <h1>{props.singleToDo.description}</h1>
                <p>{props.singleToDo.status}</p>
                <button>Edit</button>
                <button onClick={() => props.deleteTodo(props.singleToDo.id)}>Delete</button>
            </section>
        </div>
}