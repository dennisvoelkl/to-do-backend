import React from 'react';
import {ToDo} from "./ToDo";
import './ToDoCard.css';

type singleToDo = {singleToDo:ToDo}

export default function ToDoCard(props: singleToDo) {
    return (
        <div>
                <section className="card">
                <h1>{props.singleToDo.description}</h1>
                <p>{props.singleToDo.status}</p>
                <button>Edit</button>
                <button>Delete</button>
                </section>
        </div>
    );
}