import React, {useState} from 'react';
import {ToDo} from "./ToDo";
import './ToDoCard.css';

type singleToDo = {
    singleToDo:ToDo,
    deleteTodo: (id: string) => void,
    advance: (todo: ToDo) => void,
}

export default function ToDoCard(props: singleToDo) {

    const [visibleButton, setVisibleButton] = useState<boolean>(true)

    return (
        <div>
                <section className="card">
                <button onClick={() => props.advance(props.singleToDo)}>Advanced</button>
                <h1>{props.singleToDo.description}</h1>
                <p>{props.singleToDo.status}</p>
                <button>Edit</button>
                <button>Delete</button>
                </section>
        </div>
    );
}